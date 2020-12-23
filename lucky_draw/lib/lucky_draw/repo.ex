defmodule LuckyDraw.Repo do
  use Ecto.Repo,
    otp_app: :lucky_draw,
    adapter: Ecto.Adapters.Postgres
end
