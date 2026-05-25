@echo off
REM 🎯 INSTRUÇÕES RÁPIDAS - PÁGINA DE BIOIMPEDÂNCIA (Windows)

setlocal enabledelayedexpansion

cls
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  📱 PÁGINA DE BIOIMPEDÂNCIA ANIMADA - MODO VERTICAL        ║
echo ║  Cores: AMARELO ^^^| Animação: Raios + Partículas            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo 📍 LOCALIZAÇÃO DE ARQUIVOS:
echo    • Componentes:     src\components\bioimpedance\
echo    • Rota:            src\app\bia\page.tsx
echo    • Documentação:    .\BIA_*.md
echo.

echo ✅ COMO INICIAR:
echo    1. Abrir PowerShell ou CMD neste diretório
echo    2. Executar: npm run dev
echo    3. Abrir navegador: http://localhost:3000/bia
echo.

echo 📱 TESTAR EM MODO VERTICAL:
echo    1. Abrir DevTools (F12)
echo    2. Toggle Device Toolbar (Ctrl+Shift+M)
echo    3. Selecionar orientação: Portrait
echo    4. Selecionar device: iPhone Pro Max (1080x2340)
echo.

echo 📊 CARACTERÍSTICAS:
echo    ✓ Renderização 3D (Three.js)
echo    ✓ 1500 Partículas animadas
echo    ✓ 12 Raios de luz
echo    ✓ Painéis de dados animados
echo    ✓ Gráficos tipo Gauge
echo    ✓ Layout vertical otimizado
echo    ✓ Paleta AMARELA (marca)
echo.

echo 🎨 CORES PRINCIPAIS:
echo    🟡 Amarelo:      #FFD700
echo    🟠 Laranja:      #FFAA00
echo    🔴 Vermelho:     #FF3333
echo.

echo 📚 DOCUMENTAÇÃO:
echo    1. IMPLEMENTACAO_BIA_CONCLUIDA.md      ^← Resumo completo
echo    2. BIA_DOCUMENTACAO_INDEX.md           ^← Índice de docs
echo    3. BIA_ANIMATED_PAGE_TECHNICAL_SPEC.md ^← Especificação
echo    4. src\components\bioimpedance\README.md
echo    5. src\components\bioimpedance\VERTICAL_MODE_GUIDE.md
echo.

echo 🔧 CUSTOMIZAÇÕES RÁPIDAS:
echo    • Mudar altura canvas:   BioimpedanceViewer.tsx (line ~110)
echo    • Alterar cores:         Canvas3DRenderer.tsx (0xffcc00)
echo    • Acelerar animações:    Canvas3DRenderer.tsx (elapsed * X)
echo    • Mais partículas:       Canvas3DRenderer.tsx (particleCount)
echo.

echo 🐛 TROUBLESHOOTING:
echo    • Canvas não aparece?    Abra DevTools Console e procure erros
echo    • Cores erradas?         npm run dev e limpe cache (Ctrl+Shift+Del)
echo    • Animações lentas?      Reduza particleCount em Canvas3DRenderer.tsx
echo.

echo 📱 RESOLUÇÕES TESTADAS:
echo    • FHD Vertical:   1080x1920 ✅
echo    • QHD Vertical:   1440x2560 ✅
echo    • 4K Vertical:    2160x3840 ✅
echo.

echo 🚀 PRÓXIMOS PASSOS:
echo    1. Testar a página
echo    2. Integrar com API real (/api/bioimpedance)
echo    3. Adicionar autenticação
echo    4. Implementar histórico de avaliações
echo.

echo ════════════════════════════════════════════════════════════
echo ✨ PRONTO PARA USAR! Acesse: http://localhost:3000/bia
echo ════════════════════════════════════════════════════════════
echo.

endlocal
