 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 66d548a9be059d68f37dc18c134ff5fb3e918587..92327ca5be6295e8f14c7f053b43dd2ca44c4d3c 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,46 @@
-# suckers
+# Auto Experts – aplicação Next.js (App Router)
+
+Este repositório agora inclui uma versão completa em Next.js localizada na pasta [`web/`](web/), reconstruindo a home e as rotas essenciais do catálogo Auto Experts com carrosséis Swiper, formulários conectados a mocks de API e suporte a múltiplos idiomas/regiões.
+
+## Como executar localmente
+
+1. Acesse a pasta da aplicação: `cd web`
+2. Instale as dependências: `npm install`
+3. Inicie o servidor de desenvolvimento: `npm run dev`
+4. Abra `http://localhost:3000` no navegador. Você será redirecionado automaticamente para `/pt/br`.
+
+> **Dica:** caso sua máquina esteja sem acesso à internet para baixar pacotes, utilize os artefatos já versionados neste repositório para revisar a estrutura, componentes e APIs mockadas.
+
+## Navegação por locale/região
+
+- A estrutura principal segue o padrão `/{locale}/{region}` com os locais `pt`, `en`, `es` e as regiões `br`, `ar`, `co`, `mx`, `us`, `latam`.
+- Para trocar idioma ou região, ajuste diretamente a URL ou utilize os dropdowns no cabeçalho. Exemplos:
+  - `http://localhost:3000/en/us`
+  - `http://localhost:3000/es/latam`
+- As rotas secundárias disponibilizadas incluem:
+  - `/[locale]/[region]/about`
+  - `/[locale]/[region]/find`
+  - `/[locale]/[region]/contact`
+  - `/[locale]/[region]/privacy`
+  - `/[locale]/[region]/warranty`
+  - `/[locale]/[region]/download-pdf`
+  - `/[locale]/[region]/product/[id]`
+  - `/[locale]/academy/know`
+  - `/[locale]/loyalty/know`
+
+Todas as páginas adicionais exibem placeholders claros até que o conteúdo definitivo seja produzido.
+
+## Funcionalidades principais
+
+- **Home completa:** carrosséis de banner, segmentos, marcas, categorias e lançamentos via Swiper React (importados dinamicamente para evitar problemas de SSR).
+- **Formulários interativos:** buscas por placa, chassi e palavra-chave consumindo as rotas mockadas `/api/plate`, `/api/chassis` e `/api/search`, exibindo o retorno logo abaixo de cada formulário.
+- **Componentes reutilizáveis:** cabeçalho com menus acessíveis, dropdowns de idioma/região, seção de serviços, newsletter e botão “Voltar ao topo” com rolagem suave.
+- **APIs mockadas:** respostas em JSON simulam o comportamento real e mantêm a aplicação funcional mesmo sem backend.
+
+## Limitações e próximos passos
+
+- As imagens originais do projeto não estavam disponíveis. Foram incluídos placeholders simples em `web/public/images/*` apenas para preservar a estrutura dos layouts.
+- Conteúdos institucionais (sobre, contato, privacidade etc.) e páginas como `download-pdf` permanecem como esboços textuais aguardando integração real.
+- A validação/normalização dos inputs dos formulários pode ser refinada conforme regras de negócio futuras.
+
+Contribuições e ajustes adicionais são bem-vindos para evoluir este esqueleto Next.js até a paridade total com o produto final.
 
EOF
)
