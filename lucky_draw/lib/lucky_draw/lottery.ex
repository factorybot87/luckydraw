defmodule LuckyDraw.Lottery do
  import Ecto.Query, warn: false
  alias LuckyDraw.Repo

  alias LuckyDraw.Lottery.Award
  alias LuckyDraw.Lottery.Candidate

  def list_awards do
    Repo.all(Award)
  end

  def get_award!(id) do
    Repo.get!(Award, id)
  end

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

  def list_candidates do
    Repo.all(Candidate)
  end

  def get_candidate!(id) do
    Repo.get!(Candidate, id)
  end

  def update_candidate(%Candidate{} = candidate, attrs) do
    candidate
    |> Candidate.changeset(attrs)
    |> Repo.update()
  end
end
