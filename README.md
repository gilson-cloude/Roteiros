# Planejador de Roteiros

Aplicativo web (PWA) para planejar roteiros de viagem pelo Brasil e América Latina: mapa, programação dia a dia, custos, logística de fronteiras/documentação e catálogo de campings, tudo em um só lugar.

🔗 Deploy: [heartfelt-clafoutis-73afb1.netlify.app](https://heartfelt-clafoutis-73afb1.netlify.app)

## Funcionalidades

- Catálogo de roteiros prontos (Patagônia, Atacama, Cuba, Peru, regiões do Brasil, etc.), cada um com uma página "dia a dia" própria
- Mapa interativo do roteiro
- Estimativa de custos e checklist de viagem
- Informações de fronteiras, documentação e seguro (SENASA)
- Catálogo de campings e postos de apoio, com dados vindos do OpenStreetMap
- Instalável como PWA (funciona offline via Service Worker)

## Estrutura do projeto

O projeto é um site estático (sem build step): cada roteiro tem sua própria página `dia-a-dia-*.html`, e a navegação entre elas é resolvida em `roteiro.html`/`catalogo.html` a partir de um mapeamento de slugs. Por isso os arquivos ficam juntos na raiz — mover páginas/imagens para subpastas exigiria atualizar esses mapeamentos e a lista de cache do `sw.js` (ver `ASSETS`).

```
index.html, app.html          # entrada do app
roteiro.html, roteiros.html    # roteiro individual / lista de roteiros
catalogo.html                  # catálogo de fotos/roteiros (usa image-slot.js)
dia-a-dia-*.html               # uma página por roteiro
mapa.html                      # mapa interativo
custos.html, logistica.html,
fronteiras.html, documentacao.html,
checklist.html, senasa.html    # páginas de apoio ao planejamento
camping.html, campings-brasil.html,
postos.html, oficinas.html,
vinicolas.html                 # catálogos complementares
*.js                           # lógica de cada página / dados
*.jpg, *.svg, icon-*.png        # imagens usadas nos roteiros e ícones do PWA
manifest.webmanifest, sw.js     # configuração de PWA
```

## Como rodar localmente

Como é um app estático, basta servir a pasta com qualquer servidor HTTP, por exemplo:

```bash
npx serve .
```

E abrir `http://localhost:3000`.

## Tecnologias

HTML, CSS e JavaScript puro (sem frameworks), com Service Worker para funcionamento como PWA e dados geográficos via OpenStreetMap/Overpass.
