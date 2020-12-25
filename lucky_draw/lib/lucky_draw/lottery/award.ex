defmodule LuckyDraw.Lottery.Award do
  use Ecto.Schema
  import Ecto.Changeset

  schema "awards" do
    field :content, :string
    field :price, :integer
    field :provider_name, :string
    field :winner, :string

    timestamps()
  end

  def changeset(award, attrs) do
    award
    |> cast(attrs, [:content, :price, :provider_name, :winner])
    |> validate_required([:content, :price])
  end
end
