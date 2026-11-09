# ByteTrainer integrations and website

## Repository scope

- This repository serves the official ByteTrainer website and signed integrations through GitHub Pages on `main`. The app, integration source, signing tools and site generator live in [trainer-hub](https://github.com/ByteTrainer/trainer-hub).
- `packages/` contains published `.thub` files. `catalog-v2.json` is the current signed catalog. Keep the legacy `catalog.json` available for existing clients.
- Published packages target single-player Steam sessions. The website and game pages link to the corresponding signed downloads and to the Windows app releases in the main repository.

## Sources and generated files

- Make homepage changes in `trainer-hub/site/index.html`, catalog and game-page template changes in `trainer-hub/scripts/prepare-integration-site.mjs`, and translation changes in `trainer-hub/locales/`. The localized pages and the locale copies here are generated. Maintain directly owned site assets such as `assets/site.css` and `assets/catalogo.js` here.
- Preserve the Portuguese root URLs and the English and Spanish paths under `en/` and `es/`. Keep existing game-page URLs and package links stable.
- Keep `README.md` in English and the linked `README.pt-BR.md` and `README.es.md` in sync. When a package changes the supported games or number of controls, update the tables in all three files from the verified catalog.

## Render and publish

Run these commands from the app checkout with both repositories checked out side by side. Use the first command to regenerate pages from the current catalog and the second to publish a validated package.

```powershell
node scripts/prepare-integration-site.mjs ../trainer-integrations --render
./scripts/publish-integrations.ps1 -SiteDirectory ../trainer-integrations -Package <signed-package.thub>
```

- Use the [integration publishing guide](https://github.com/ByteTrainer/trainer-hub/blob/main/INTEGRATIONS.md) for packaging and release details. Publish the new package, signed catalog and generated game pages together. Review the site checkout first because the publisher expects a clean working tree.
- Preserve previously published package bytes and filenames. Publish changed contents under a higher revision and a new filename. Use the established publisher key and keep the private key and other credentials outside this repository.
- Before publishing, verify catalog and package signatures, game ID, revision, version, package hash and generated links. After publishing, confirm that the public catalog, package and localized game pages are live and the app updater accepts the new entry.
