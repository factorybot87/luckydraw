defmodule LuckyDraw.Lottery do
  import Ecto.Query, warn: false
  alias LuckyDraw.Repo

  alias LuckyDraw.Lottery.Award

  def list_awards do
    Repo.all(Award)
  end
end
