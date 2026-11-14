# Colherinha

Site em inglês, espanhol e português para notícias e artigos de estudantes.

## Onde editar

- `index.html`: estrutura das seções e do formulário.
- `styles.css`: cores, tipografia e layout.
- `app.js`: textos nos três idiomas, artigos e envio ao Supabase.
- `api/news.js`: seleção de notícias e fontes do Google News RSS.
- `supabase/functions/submit-article/index.ts`: validação e publicação de artigos.
- `supabase/migrations/`: estrutura do banco, já aplicada ao projeto Supabase.

O projeto público está em https://colherinha.vercel.app. O projeto Vercel se chama
`colherinha` na equipe `a-dedf`. O projeto Supabase tem a referência
`bqjfidhduaahdlgspvff`.

## Trabalho local

Rode `npm run check` para verificar a sintaxe JavaScript. O site tem arquivos
estáticos em sua raiz e uma função Vercel em `api/news.js`.

Quando o repositório estiver conectado à Vercel, mudanças na branch `main`
publicam uma nova versão do site. A função Supabase é independente: alterações
em `supabase/functions/submit-article/index.ts` precisam de uma implantação
separada no projeto Supabase.

O arquivo `.env.local` contém configuração local e não deve ser enviado ao Git.
A chave `sb_publishable_` presente em `app.js` é pública e usada somente para
as leituras permitidas pelas políticas de acesso do banco.
