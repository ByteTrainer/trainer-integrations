# Site oficial do Trainer Hub

O [site oficial](https://bytetrainer.github.io/trainer-integrations/) apresenta os jogos compatíveis, seus cheats e o download do aplicativo. O [código do aplicativo](https://github.com/ByteTrainer/trainer-hub) fica no repositório principal.

O GitHub Pages serve a branch `main` sem etapa de compilação. Edite `index.html` e `assets/site.css` para atualizar o site. O botão de download aponta para a versão estável mais recente no GitHub.

O aplicativo consulta `catalog.json` e baixa os arquivos assinados de `packages/`. Preserve esses caminhos e os arquivos publicados. Ao lançar uma integração, atualize a lista de jogos e cheats e o link do pacote na página no mesmo commit que publica o novo catálogo assinado. Consulte o [guia de publicação de integrações](https://github.com/ByteTrainer/trainer-hub/blob/main/INTEGRATIONS.md).

As capas vêm das páginas dos jogos na Steam. A captura de Sol Cesto mostra a versão 0.6.0 do aplicativo. As licenças das fontes ficam em `assets/`.
