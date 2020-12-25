defmodule LuckyDrawWeb.Schema do
  use Absinthe.Schema
  import_types(LuckyDrawWeb.Schema.Lottery)

  alias LuckyDrawWeb.Resolver

  query do
    @desc "Get all awards"
    field :awards, list_of(:award) do
      resolve(&Resolver.Lottery.list_awards/3)
    end
  end
end
