defmodule LuckyDrawWeb.Schema do
  use Absinthe.Schema
  import_types(LuckyDrawWeb.Schema.Lottery)

  alias LuckyDrawWeb.Resolver

  query do
    @desc "Get all awards"
    field :awards, list_of(:award) do
      resolve(&Resolver.Lottery.list_awards/3)
    end

    @desc "Get an award by id"
    field :award, :award do
      arg(:id, non_null(:id))

      resolve(&Resolver.Lottery.get_award/3)
    end
  end

  mutation do
    @desc "Create an award"
    field :create_award, type: :award do
      arg(:content, non_null(:string))
      arg(:price, non_null(:integer))
      arg(:provider_name, :string)

      resolve(&Resolver.Lottery.create_award/3)
    end

    @desc "Update an award"
    field :update_award, type: :award do
      arg(:id, non_null(:id))
      arg(:content, :string)
      arg(:price, :integer)
      arg(:provider_name, :string)
      arg(:winner, :string)

      resolve(&Resolver.Lottery.update_award/3)
    end

    @desc "Delete an award"
    field :delete_award, type: :award do
      arg(:id, non_null(:id))

      resolve(&Resolver.Lottery.delete_award/3)
    end
  end
end
