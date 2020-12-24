defmodule LuckyDrawWeb.Schema.Lottery do
  use Absinthe.Schema.Notation

  object :award do
    field :id, non_null(:id)
    field :content, non_null(:string)
    field :price, non_null(:integer)
    field :provider_name, :string
    field :winner, :string
  end
end
