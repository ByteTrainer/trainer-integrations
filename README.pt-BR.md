# ByteTrainer Integrations

<p align="center">
  <img src="assets/icon.png" width="84" height="84" alt="">
</p>

<p align="center"><strong>Integrações assinadas e catálogo oficial do ByteTrainer</strong></p>

<p align="center"><a href="README.md">English</a> · <strong>Português (Brasil)</strong> · <a href="README.es.md">Español</a></p>

<p align="center">
  <a href="https://bytetrainer.github.io/trainer-integrations/"><strong>Site oficial</strong></a> ·
  <a href="https://github.com/ByteTrainer/trainer-hub/releases/latest">Baixar ByteTrainer</a> ·
  <a href="https://discord.gg/pMSJayXFmj">Discord</a>
</p>

## Jogos compatíveis

A página de cada jogo mostra os controles disponíveis e oferece o pacote assinado mais recente. A compatibilidade depende da versão instalada pela Steam. [Ver catálogo atualizado](https://bytetrainer.github.io/trainer-integrations/catalogo.html)

| Jogo | Controles |
| --- | ---: |
| [Dungeon of the Endless](https://bytetrainer.github.io/trainer-integrations/jogos/249050.html) | 14 |
| [Kawaii Deathu Desu](https://bytetrainer.github.io/trainer-integrations/jogos/1102880.html) | 5 |
| [Last Hope Bunker: Zombie Survival](https://bytetrainer.github.io/trainer-integrations/jogos/2475440.html) | 7 |
| [Moventure](https://bytetrainer.github.io/trainer-integrations/jogos/3826060.html) | 3 |
| [My Friend Pedro](https://bytetrainer.github.io/trainer-integrations/jogos/557340.html) | 8 |
| [My Little Universe](https://bytetrainer.github.io/trainer-integrations/jogos/2328750.html) | 21 |
| [Out of Space](https://bytetrainer.github.io/trainer-integrations/jogos/400080.html) | 10 |
| [Pigeons Attack](https://bytetrainer.github.io/trainer-integrations/jogos/814300.html) | 11 |
| [Tooth and Tail](https://bytetrainer.github.io/trainer-integrations/jogos/286000.html) | 7 |
| [Cooking Live: Restaurant Game](https://bytetrainer.github.io/trainer-integrations/jogos/1990690.html) | 9 |
| [Pumpkin Jack](https://bytetrainer.github.io/trainer-integrations/jogos/1186640.html) | 6 |
| [Shake it Co!](https://bytetrainer.github.io/trainer-integrations/jogos/3578070.html) | 13 |
| [Sol Cesto](https://bytetrainer.github.io/trainer-integrations/jogos/2738490.html) | 8 |
| [Tinykin](https://bytetrainer.github.io/trainer-integrations/jogos/1599020.html) | 12 |

## Instalar ou atualizar uma integração

1. Abra **Configurações → Atualizações das integrações → Verificar online** no ByteTrainer. Se o jogo ainda não aparecer na biblioteca, selecione **Baixar pacote**.
2. Feche o jogo e selecione **Instalar integração** ou **Atualizar integração** na página dele.
3. Inicie o jogo pela Steam, entre em uma partida solo e selecione **Conectar trainer**.

Para instalar manualmente, baixe o arquivo `.thub` na página do jogo no catálogo e selecione **Importar pacote assinado** na mesma seção das configurações. Para recuperar os arquivos preservados na instalação, feche o jogo e selecione **Restaurar original** na página dele.

**Uso exclusivo em partidas single-player.** Em jogos que também oferecem multiplayer, use o trainer no modo solo.

## Como os pacotes são distribuídos

O ByteTrainer lê o `catalog-v2.json` assinado no GitHub Pages. Ele confere o hash do pacote baixado com o catálogo e verifica a assinatura Ed25519 antes de aceitá-lo.

Cada pacote declara os arquivos do jogo compatíveis, os controles e a versão mínima do ByteTrainer. Novas integrações e correções podem ser publicadas separadamente quando o app instalado já oferece suporte ao formato do pacote.

| Arquivo | Finalidade |
| --- | --- |
| [packages/](packages/) | Pacotes `.thub` assinados por jogo e versão |
| [catalog-v2.json](catalog-v2.json) | Catálogo assinado atual |
| [catalog.json](catalog.json) | Catálogo para versões antigas do app |
| [catalogo.html](https://bytetrainer.github.io/trainer-integrations/catalogo.html) | Catálogo e páginas de jogos gerados em inglês, português brasileiro e espanhol |
| [ByteTrainer / trainer-hub](https://github.com/ByteTrainer/trainer-hub) | Código-fonte do app e versões para Windows |

## Como contribuir

- Solicite jogos ou relate problemas nas integrações pelo Discord. Ao relatar um erro, inclua o jogo, a build da Steam e a versão da integração. [Entre no Discord](https://discord.gg/pMSJayXFmj)
- Edite as traduções e o conteúdo do site no repositório do aplicativo, que contém os arquivos usados para gerar este site. [Guia de tradução](https://github.com/ByteTrainer/trainer-hub/blob/main/locales/README.md)
- Publique novas revisões pelo script `scripts/publish-integrations.ps1` no repositório do aplicativo. Ele atualiza o catálogo assinado e as páginas dos jogos juntos. Use `node scripts/prepare-integration-site.mjs ../trainer-integrations --render` para regenerar as páginas a partir do catálogo atual. [Guia de publicação de integrações](https://github.com/ByteTrainer/trainer-hub/blob/main/INTEGRATIONS.md)
