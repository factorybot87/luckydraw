defmodule LuckyDraw.Lottery.Candidate do
  use Ecto.Schema
  import Ecto.Changeset

  schema "candidates" do
    field :name, :string
    field :is_winner, :boolean

    timestamps()
  end

  def changeset(candidate, attrs) do
    candidate
    |> cast(attrs, [:is_winner])
  end
end
