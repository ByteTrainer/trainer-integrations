# Site oficial do ByteTrainer

O [site oficial](https://bytetrainer.github.io/trainer-integrations/) apresenta os jogos compatíveis, seus cheats e o download do aplicativo. O [código do aplicativo](https://github.com/ByteTrainer/trainer-hub) fica no repositório principal.

O GitHub Pages serve a branch `main` sem etapa de compilação. Edite `index.html` e `assets/site.css` para atualizar o site. O botão de download aponta para a versão estável mais recente no GitHub.

A partir da versão 1.0, o Hub consulta `catalog-v2.json` e baixa os pacotes assinados de `packages/`. As versões anteriores consultam `catalog.json`. Execute `scripts/publish-integrations.ps1` no repositório do Hub para atualizar a página, o catálogo e os pacotes no mesmo commit. Consulte o [guia de publicação de integrações](https://github.com/ByteTrainer/trainer-hub/blob/main/INTEGRATIONS.md).

As capas vêm das páginas dos jogos na Steam. A captura de Sol Cesto mostra a versão 0.6.0 do aplicativo. As licenças das fontes ficam em `assets/`.

O catálogo em `catalogo.html` e as páginas em `jogos/` são gerados a partir dos pacotes assinados. Para regenerar apenas as páginas a partir do catálogo existente, execute `node scripts/prepare-integration-site.mjs ../trainer-integrations --render` no repositório do aplicativo.
