# ByteTrainer Integrations

<p align="center">
  <img src="assets/icon.png" width="84" height="84" alt="">
</p>

<p align="center"><strong>Integraciones firmadas y catálogo oficial de ByteTrainer</strong></p>

<p align="center"><a href="README.md">English</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <strong>Español</strong></p>

<p align="center">
  <a href="https://bytetrainer.github.io/trainer-integrations/es/"><strong>Sitio oficial</strong></a> ·
  <a href="https://github.com/ByteTrainer/trainer-hub/releases/latest">Descargar ByteTrainer</a> ·
  <a href="https://discord.gg/pMSJayXFmj">Discord</a>
</p>

## Juegos compatibles

La página de cada juego muestra los controles disponibles y ofrece el paquete firmado más reciente. La compatibilidad depende de la versión instalada desde Steam. [Ver el catálogo actualizado](https://bytetrainer.github.io/trainer-integrations/es/catalogo.html)

| Juego | Controles |
| --- | ---: |
| [Dungeon of the Endless](https://bytetrainer.github.io/trainer-integrations/es/jogos/249050.html) | 14 |
| [Kawaii Deathu Desu](https://bytetrainer.github.io/trainer-integrations/es/jogos/1102880.html) | 5 |
| [Last Hope Bunker: Zombie Survival](https://bytetrainer.github.io/trainer-integrations/es/jogos/2475440.html) | 7 |
| [Moventure](https://bytetrainer.github.io/trainer-integrations/es/jogos/3826060.html) | 3 |
| [My Friend Pedro](https://bytetrainer.github.io/trainer-integrations/es/jogos/557340.html) | 8 |
| [My Little Universe](https://bytetrainer.github.io/trainer-integrations/es/jogos/2328750.html) | 21 |
| [Out of Space](https://bytetrainer.github.io/trainer-integrations/es/jogos/400080.html) | 10 |
| [Pigeons Attack](https://bytetrainer.github.io/trainer-integrations/es/jogos/814300.html) | 11 |
| [Pumpkin Jack](https://bytetrainer.github.io/trainer-integrations/es/jogos/1186640.html) | 6 |
| [Shake it Co!](https://bytetrainer.github.io/trainer-integrations/es/jogos/3578070.html) | 13 |
| [Sol Cesto](https://bytetrainer.github.io/trainer-integrations/es/jogos/2738490.html) | 8 |
| [Tinykin](https://bytetrainer.github.io/trainer-integrations/es/jogos/1599020.html) | 12 |

## Instalar o actualizar una integración

1. Abre **Configuración → Actualizaciones de las integraciones → Verificar en línea** en ByteTrainer. Si el juego todavía no aparece en tu biblioteca, selecciona **Descargar paquete**.
2. Cierra el juego y selecciona **Instalar integración** o **Actualizar integración** en su página.
3. Inicia el juego desde Steam, entra en una partida individual y selecciona **Conectar trainer**.

Para instalar manualmente, descarga el archivo `.thub` desde la página del juego en el catálogo y selecciona **Importar paquete firmado** en la misma sección de configuración. Para recuperar la copia de los archivos originales, cierra el juego y selecciona **Restaurar original** en su página.

**Uso exclusivo en partidas de un solo jugador.** Si un juego también ofrece multijugador, usa el trainer en el modo individual.

## Cómo se distribuyen los paquetes

ByteTrainer lee el `catalog-v2.json` firmado en GitHub Pages. Comprueba el hash del paquete descargado con el del catálogo y verifica la firma Ed25519 antes de aceptarlo.

Cada paquete indica los archivos del juego compatibles, los controles y la versión mínima de ByteTrainer. Las nuevas integraciones y las correcciones se pueden publicar por separado cuando la aplicación instalada admite el formato del paquete.

| Archivo | Finalidad |
| --- | --- |
| [packages/](packages/) | Paquetes `.thub` firmados por juego y versión |
| [catalog-v2.json](catalog-v2.json) | Catálogo firmado actual |
| [catalog.json](catalog.json) | Catálogo para versiones anteriores de la aplicación |
| [catalogo.html](https://bytetrainer.github.io/trainer-integrations/es/catalogo.html) | Catálogo y páginas de juegos generados en inglés, portugués de Brasil y español |
| [ByteTrainer / trainer-hub](https://github.com/ByteTrainer/trainer-hub) | Código fuente de la aplicación y versiones para Windows |

## Cómo contribuir

- Solicita juegos o informa de problemas con las integraciones en Discord. Incluye el juego, la compilación de Steam y la versión de la integración al informar de un problema. [Únete a Discord](https://discord.gg/pMSJayXFmj)
- Edita las traducciones y el contenido del sitio en el repositorio de la aplicación, que contiene los archivos usados para generar este sitio. [Guía de traducción](https://github.com/ByteTrainer/trainer-hub/blob/main/locales/README.md)
- Publica revisiones nuevas con `scripts/publish-integrations.ps1` desde el repositorio de la aplicación. El script actualiza el catálogo firmado y las páginas de los juegos juntos. Usa `node scripts/prepare-integration-site.mjs ../trainer-integrations --render` para volver a generar las páginas a partir del catálogo actual. [Guía de publicación de integraciones](https://github.com/ByteTrainer/trainer-hub/blob/main/INTEGRATIONS.md)
