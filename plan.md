# Plano — ALbert.C Systems

## Implementação

Criar um site institucional estático, responsivo e acessível para a ALbert.C Business usando HTML semântico, CSS modular em um único arquivo e JavaScript leve para navegação móvel, efeitos de entrada e feedback do formulário. A Home reúne as áreas de quem somos, problema, serviços, soluções, projetos, método e contacto; nesta primeira versão elas são seções navegáveis para preservar um percurso comercial contínuo. O site funciona como porta de entrada comercial: pergunta qual problema o visitante quer resolver, apresenta três caminhos — Website, Sistema ou Automação — e conduz ao pedido de orçamento. O site será servido por um servidor Node.js sem dependências externas e publicado como saída estática.

## Direção de design

- **Movimento:** tecnologia editorial / brutalismo refinado — estrutura visível, contraste alto, tipografia forte e elementos de sistema que parecem vivos.
- **Princípios:** clareza antes do efeito; modularidade; autoridade próxima; movimento com propósito.
- **Filosofia de cor:** a identidade “Luanda Circuit” abandona o azul neon genérico. Noite Luanda `#11101B` cria profundidade; terracota `#D3644F` dá presença humana e ação; verde-lima Aurora `#CFEF68` funciona como sinal proprietário de energia e conexão; marfim `#F6F1E8` equilibra a leitura; cinza mineral `#7C7B86` organiza os metadados.
- **Layout:** composição assimétrica com grandes blocos de conteúdo, marcadores laterais, linhas de conexão e cartões modulares; evitar uma grade centralizada genérica.
- **Elementos de assinatura:** símbolo A.C em módulos conectados; linha de fluxo com nós; etiquetas monoespaçadas de sistema; comunicação visual orientada por tipografia, cor e movimento, sem depender de imagens editoriais.
- **Interação:** cada interação deve tornar o sistema mais legível — menu móvel direto, links com feedback visual, cartões com elevação sutil e formulário com retorno claro.
- **Animação:** entrada progressiva de blocos, linha de fluxo em movimento lento, hover com deslocamento de poucos pixels e respeito a `prefers-reduced-motion`.
- **Tipografia:** títulos em `Arial/Helvetica` com peso alto e tracking negativo; textos em sans-serif neutra; metadados em fonte monoespaçada para o caráter técnico.
- **Essência:** uma camada de negócio que entende o problema e encaminha a solução digital certa para empresas que precisam evoluir. Personalidade: inteligente, próxima e precisa.
- **Voz:** direta, clara e orientada a resultado. Exemplos: “Quando os sistemas não conversam, o crescimento trava.” e “Vamos transformar seu próximo gargalo em estrutura.”
- **Logo:** wordmark ALbert.C com ponto de conexão destacado e símbolo A.C modular em SVG; o ícone funciona isoladamente como favicon e marca de interface.
- **Cor proprietária:** verde-lima Aurora `#CFEF68`, usado como pulso visual nos fluxos, estados ativos e pontos de decisão da ALbert.C Business.

## Conteúdo comercial

Os serviços oficiais são Desenvolvimento Web, Sistemas de Gestão, E-commerce, APIs, Automação e Manutenção e suporte. A área de produtos apresenta RestaurantOS, StockOS, SalesOS, ClinicOS, SupplierOS e BusinessOS como soluções em desenvolvimento. A área de portfólio já está preparada para receber casos no formato Problema → Solução → Tecnologias → Resultado, sem inventar provas sociais ou resultados antes de existirem.

## Estrutura do projeto

- `index.html` — página única, conteúdo institucional, navegação e formulário.
- `styles.css` — tokens de marca, layout responsivo, estados de interação e animações.
- `script.js` — menu móvel, ano dinâmico, revelação de elementos e feedback do formulário.
- `public/manus-routes.json` — manifesto da rota pública `/`.
- `public/logo.svg` — marca vetorial para interface e favicon.
- `server.js` — servidor estático Node.js para Preview.
- `package.json` — scripts de desenvolvimento e build estático.
- `app.config.ts` — metadado básico de identidade do projeto.
