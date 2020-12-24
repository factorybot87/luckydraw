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

    @tag :skip
    test "get_award!/1 returns the award with given id" do
      award = award_fixture()
      assert Lottery.get_award!(award.id) == award
    end

    @tag :skip
    test "create_award/1 with valid data creates a award" do
      assert {:ok, %Award{} = award} = Lottery.create_award(@valid_attrs)
    end

    @tag :skip
    test "create_award/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Lottery.create_award(@invalid_attrs)
    end

    @tag :skip
    test "update_award/2 with valid data updates the award" do
      award = award_fixture()
      assert {:ok, %Award{} = award} = Lottery.update_award(award, @update_attrs)
    end

    @tag :skip
    test "update_award/2 with invalid data returns error changeset" do
      award = award_fixture()
      assert {:error, %Ecto.Changeset{}} = Lottery.update_award(award, @invalid_attrs)
      assert award == Lottery.get_award!(award.id)
    end

    @tag :skip
    test "delete_award/1 deletes the award" do
      award = award_fixture()
      assert {:ok, %Award{}} = Lottery.delete_award(award)
      assert_raise Ecto.NoResultsError, fn -> Lottery.get_award!(award.id) end
    end

    @tag :skip
    test "change_award/1 returns a award changeset" do
      award = award_fixture()
      assert %Ecto.Changeset{} = Lottery.change_award(award)
    end
  end
end
