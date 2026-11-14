create table public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 8 and 120),
  author text not null check (char_length(author) between 2 and 60),
  category text not null check (category in ('politics','geopolitics','economy','society','opinion')),
  body text not null check (char_length(body) between 150 and 10000),
  source text not null default '' check (char_length(source) <= 300),
  language text not null check (language in ('en','es','pt')),
  ip_fingerprint text not null,
  created_at timestamptz not null default now()
);
create index articles_created_at_idx on public.articles (created_at desc);
create index articles_rate_limit_idx on public.articles (ip_fingerprint, created_at desc);
alter table public.articles enable row level security;
create policy "Anyone can read articles" on public.articles for select to anon, authenticated using (true);
grant select (id,title,author,category,body,source,language,created_at) on public.articles to anon, authenticated;
revoke insert, update, delete on public.articles from anon, authenticated;
