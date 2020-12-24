defmodule LuckyDraw.LotteryTest do
  use LuckyDraw.DataCase

  alias LuckyDraw.Lottery

  describe "awards" do
    alias LuckyDraw.Lottery.Award

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def award_fixture(attrs \\ %{}) do
      {:ok, award} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Lottery.create_award()

      award
    end

    @tag :skip
    test "list_awards/0 returns all awards" do
      award = award_fixture()
      assert Lottery.list_awards() == [award]
    end
  end
end
