defmodule LuckyDraw.LotteryTest do
  use LuckyDraw.DataCase

  alias LuckyDraw.Lottery

  describe "awards" do
    alias LuckyDraw.Lottery.Award

    @valid_attrs %{content: "Clean Code", price: 580, provider_name: "Mike Chen"}
    @invalid_attrs %{}

    def award_fixture(attrs \\ %{}) do
      {:ok, award} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Lottery.create_award()

      award
    end

    test "list_awards/0 returns all awards" do
      award = award_fixture()
      assert Lottery.list_awards() == [award]
    end

    test "create_award/1 with valid data creates a award" do
      assert {:ok, %Award{} = award} = Lottery.create_award(@valid_attrs)
    end

    test "create_award/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Lottery.create_award(@invalid_attrs)
    end
  end
end
