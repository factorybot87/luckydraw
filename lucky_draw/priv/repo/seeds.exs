alias LuckyDraw.Repo
alias LuckyDraw.Lottery.Award
alias LuckyDraw.Lottery.Candidate

defmodule SeedHelper do
  def update_id_in_sequence(changesets) do
    changesets
    |> Stream.with_index(1)
    |> Enum.map(fn {changeset, index} -> Map.put(changeset, :id, index) end)
  end

  def insert_all(changesets) do
    opts = [on_conflict: :replace_all, conflict_target: :id]
    changesets |> Enum.each(&Repo.insert!(&1, opts))
  end
end

awards = [
  # %Award{content: "", price: 0},
]

candidates = [
  # %Candidate{name: ""},
]

[awards, candidates]
|> Enum.each(&(&1 |> SeedHelper.update_id_in_sequence() |> SeedHelper.insert_all()))
