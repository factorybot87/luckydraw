# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     LuckyDraw.Repo.insert!(%LuckyDraw.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias LuckyDraw.Repo
alias LuckyDraw.Lottery.Award

opts = [on_conflict: :replace_all, conflict_target: :id]

Repo.insert!(%Award{id: 1, content: "The Last of Us II", price: 590}, opts)
Repo.insert!(%Award{id: 2, content: "PS5 Limited Edition The Last of Us II GOTY Bundle", price: 16490, provider_name: "SONY"}, opts)
Repo.insert!(%Award{id: 3, content: "PS5 Digital", price: 12980}, opts)
Repo.insert!(%Award{id: 4, content: "Switch", price: 9780}, opts)
Repo.insert!(%Award{id: 5, content: "Xbox Series X", price: 15980}, opts)
Repo.insert!(%Award{id: 6, content: "Xbox Series S", price: 9480}, opts)
Repo.insert!(%Award{id: 7, content: "對馬戰鬼", price: 1790}, opts)
