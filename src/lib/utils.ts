// Utilitário para paths de assets
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/site-next' : '';

export const getAssetPath = (path: string) => {
  return `${basePath}${path}`;
};

export const getImagePath = (imageName: string) => {
  return getAssetPath(`/images/${imageName}`);
};
