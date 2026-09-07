create table if not exists public.blessings (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  relationship text not null check (relationship in ('Family', 'Relative', 'Friend', 'Well-wisher')),
  city text not null check (char_length(city) between 1 and 80),
  message text not null check (char_length(message) between 1 and 500),
  likes integer not null default 0 check (likes >= 0),
  created_at timestamptz not null default now()
);

alter table public.blessings enable row level security;

create policy "Anyone can read blessings"
  on public.blessings for select
  using (true);

create policy "Anyone can add blessings"
  on public.blessings for insert
  with check (true);

create policy "Anyone can like blessings"
  on public.blessings for update
  using (true)
  with check (likes >= 0);
