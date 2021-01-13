defmodule LuckyDraw.Lottery do
  import Ecto.Query, warn: false
  alias LuckyDraw.Repo

  alias LuckyDraw.Lottery.Award

  def list_awards do
    Repo.all(Award)
  end

  def get_award!(id), do: Repo.get!(Award, id)

  def create_award(attrs \\ %{}) do
    %Award{}
    |> Award.changeset(attrs)
    |> Repo.insert()
  end

  def update_award(%Award{} = award, attrs) do
    award
    |> Award.changeset(attrs)
    |> Repo.update()
  end

  def delete_award(%Award{} = award) do
    Repo.delete(award)
  end
end
