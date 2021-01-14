defmodule LuckyDrawWeb.Schema.Lottery do
  use Absinthe.Schema.Notation

  object :award do
    field :id, non_null(:id)
    field :content, non_null(:string)
    field :price, :integer
    field :provider, :string
    field :winner, :id
  end

  object :candidate do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :is_winner, :boolean
  end
end
