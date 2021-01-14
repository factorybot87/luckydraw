defmodule LuckyDraw.Lottery.Award do
  use Ecto.Schema
  import Ecto.Changeset

  schema "awards" do
    field :content, :string
    field :price, :integer
    field :provider, :string
    field :winner, :id

    timestamps()
  end

  def changeset(award, attrs) do
    award
    |> cast(attrs, [:content, :price, :provider, :winner])
  end
end
