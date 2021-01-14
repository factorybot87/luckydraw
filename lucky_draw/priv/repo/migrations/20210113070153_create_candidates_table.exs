defmodule LuckyDraw.Repo.Migrations.CreateCandidatesTable do
  use Ecto.Migration

  def change do
    create table(:candidates) do
      add :name, :string, null: false
      add :is_winner, :boolean, default: false

      timestamps()
    end
  end
end
