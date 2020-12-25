defmodule LuckyDraw.Lottery do
  import Ecto.Query, warn: false
  alias LuckyDraw.Repo

  alias LuckyDraw.Lottery.Award

  def list_awards do
    Repo.all(Award)
  end

  def create_award(attrs \\ %{}) do
    %Award{}
    |> Award.changeset(attrs)
    |> Repo.insert()
  end
end
