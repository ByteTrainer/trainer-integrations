# ByteTrainer Integrations

<p align="center">
  <img src="assets/icon.png" width="84" height="84" alt="">
</p>

<p align="center"><strong>Signed game integrations and the official catalog for ByteTrainer</strong></p>

<p align="center"><strong>English</strong> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.es.md">Español</a></p>

<p align="center">
  <a href="https://bytetrainer.github.io/trainer-integrations/en/"><strong>Official website</strong></a> ·
  <a href="https://github.com/ByteTrainer/trainer-hub/releases/latest">Download ByteTrainer</a> ·
  <a href="https://discord.gg/pMSJayXFmj">Discord</a>
</p>

## Supported games

Each game page shows the available controls and offers the latest signed package. Compatibility depends on the Steam build you have installed. [Browse the live catalog](https://bytetrainer.github.io/trainer-integrations/en/catalogo.html)

| Game | Controls |
| --- | ---: |
| [Kawaii Deathu Desu](https://bytetrainer.github.io/trainer-integrations/en/jogos/1102880.html) | 5 |
| [Last Hope Bunker: Zombie Survival](https://bytetrainer.github.io/trainer-integrations/en/jogos/2475440.html) | 7 |
| [Moventure](https://bytetrainer.github.io/trainer-integrations/en/jogos/3826060.html) | 3 |
| [My Friend Pedro](https://bytetrainer.github.io/trainer-integrations/en/jogos/557340.html) | 8 |
| [My Little Universe](https://bytetrainer.github.io/trainer-integrations/en/jogos/2328750.html) | 18 |
| [Out of Space](https://bytetrainer.github.io/trainer-integrations/en/jogos/400080.html) | 10 |
| [Pumpkin Jack](https://bytetrainer.github.io/trainer-integrations/en/jogos/1186640.html) | 6 |
| [Shake it Co!](https://bytetrainer.github.io/trainer-integrations/en/jogos/3578070.html) | 13 |
| [Sol Cesto](https://bytetrainer.github.io/trainer-integrations/en/jogos/2738490.html) | 8 |
| [Tinykin](https://bytetrainer.github.io/trainer-integrations/en/jogos/1599020.html) | 12 |

## Install or update an integration

1. Open **Settings → Integration updates → Check online** in ByteTrainer. If the game is missing from the app catalog, select **Download package**.
2. Close the game and select **Install integration** or **Update integration** on its page.
3. Launch the game through Steam, enter a solo session, and select **Connect trainer**.

For manual installation, download the `.thub` file from the game’s catalog page, then select **Import signed package** in the same settings section. To restore the backed-up game files, close the game and select **Restore original** on its page.

**Single-player use only.** For games that also offer multiplayer, use the trainer in solo mode.

## How packages are distributed

ByteTrainer reads the signed `catalog-v2.json` on GitHub Pages. It checks the downloaded package against the catalog hash and verifies its Ed25519 signature before accepting it.

Each package declares its supported game files, controls, and minimum ByteTrainer version. New game integrations and fixes can ship independently of app releases when the installed app supports the package format.

| File | Purpose |
| --- | --- |
| [packages/](packages/) | Signed `.thub` packages, organized by game and release |
| [catalog-v2.json](catalog-v2.json) | Current signed catalog |
| [catalog.json](catalog.json) | Catalog for older clients |
| [catalogo.html](https://bytetrainer.github.io/trainer-integrations/en/catalogo.html) | Generated catalog and game pages in English, Brazilian Portuguese, and Spanish |
| [ByteTrainer / trainer-hub](https://github.com/ByteTrainer/trainer-hub) | App source and Windows releases |

## Contributing

- Request games or report integration issues on Discord. Include the game, Steam build and integration version when reporting a problem. [Join Discord](https://discord.gg/pMSJayXFmj)
- Make translation and site content changes in the app repository, which contains the source files used to generate this site. [Translation guide](https://github.com/ByteTrainer/trainer-hub/blob/main/locales/README.md)
- Publish new package revisions from the app repository with `scripts/publish-integrations.ps1`. The script updates the signed catalog and game pages together. Use `node scripts/prepare-integration-site.mjs ../trainer-integrations --render` to regenerate the pages from the existing catalog. [Integration publishing guide](https://github.com/ByteTrainer/trainer-hub/blob/main/INTEGRATIONS.md)
