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

  @doc false
  def changeset(award, attrs) do
    award
    |> cast(attrs, [])
    |> validate_required([])
  end
end
