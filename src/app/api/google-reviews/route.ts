import { NextResponse } from 'next/server';
import { unidades } from '@/lib/dadosAcademia';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface GooglePlaceDetails {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

interface ProcessedReview {
  author: string;
  rating: number;
  text: string;
  date: string;
  timestamp: number;
  unidade: string;
  profileImage?: string;
}

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API Key não configurada' },
      { status: 500 }
    );
  }

  try {
    // Buscar avaliações de todas as unidades em paralelo
    const reviewPromises = unidades
      .filter(unidade => unidade.placeId && !unidade.placeId.startsWith('SEU_PLACE_ID'))
      .map(async (unidade) => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${unidade.placeId}&fields=name,rating,user_ratings_total,reviews&language=pt-BR&key=${API_KEY}`,
            { next: { revalidate: 3600 } } // Cache por 1 hora
          );

          const data: GooglePlaceDetails = await response.json();

          if (data.status === 'OK' && data.result.reviews) {
            return data.result.reviews.map((review): ProcessedReview => ({
              author: review.author_name,
              rating: review.rating,
              text: review.text,
              date: review.relative_time_description,
              timestamp: review.time * 1000,
              unidade: unidade.nome,
              profileImage: review.profile_photo_url
            }));
          }

          return [];
        } catch (error) {
          console.error(`Erro ao buscar avaliações de ${unidade.nome}:`, error);
          return [];
        }
      });

    const allReviews = await Promise.all(reviewPromises);
    const flattenedReviews = allReviews.flat();

    // Mesclar e priorizar:
    // 1. Avaliações 5 estrelas
    // 2. Mais recentes primeiro
    // 3. Misturar unidades para diversidade
    const sortedReviews = flattenedReviews
      .sort((a, b) => {
        // Priorizar avaliações 5 estrelas
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        // Se mesma nota, mais recente primeiro
        return b.timestamp - a.timestamp;
      })
      .slice(0, 20); // Limitar a 20 melhores avaliações

    // Estatísticas gerais
    const totalReviews = flattenedReviews.length;
    const averageRating = totalReviews > 0
      ? (flattenedReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : '0.0';

    return NextResponse.json({
      reviews: sortedReviews,
      stats: {
        total: totalReviews,
        average: parseFloat(averageRating),
        fiveStars: flattenedReviews.filter(r => r.rating === 5).length,
        fourStars: flattenedReviews.filter(r => r.rating === 4).length,
      }
    });
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar avaliações do Google' },
      { status: 500 }
    );
  }
}
