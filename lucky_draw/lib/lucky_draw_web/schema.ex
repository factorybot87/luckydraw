defmodule LuckyDrawWeb.Schema do
  use Absinthe.Schema
  import_types(LuckyDrawWeb.Schema.Lottery)

  alias LuckyDrawWeb.Resolver.Lottery

  query do
    @desc "Get all awards"

    field :awards, list_of(:award) do
      resolve(&Lottery.list_awards/3)
    end

    @desc "Get all candidates"
    field :candidates, list_of(:candidate) do
      resolve(&Lottery.list_candidates/3)
    end
  end

  mutation do
    @desc "Add an award"
    field :add_award, type: :award do
      arg(:content, non_null(:string))
      arg(:price, non_null(:integer))
      arg(:provider, :string)

      resolve(&Lottery.add_award/3)
    end

    @desc "Edit an award"
    field :edit_award, type: :award do
      arg(:id, non_null(:id))
      arg(:content, :string)
      arg(:price, :integer)
      arg(:provider, :string)

      resolve(&Lottery.edit_award/3)
    end

    @desc "Delete an award"
    field :delete_award, type: :award do
      arg(:id, non_null(:id))

      resolve(&Lottery.delete_award/3)
    end

    @desc "Draw a winner"
    field :draw_winner, type: :candidate do
      arg(:award_id, non_null(:id))

      resolve(&Lottery.draw_winner/3)
    end

    @desc "Give up an award"
    field :give_up_award, type: :award do
      arg(:award_id, non_null(:id))

      resolve(&Lottery.give_up_award/3)
    end
  end
end
