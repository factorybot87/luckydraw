defmodule LuckyDraw.Repo.Migrations.CreateAwardsTable do
  use Ecto.Migration

  def change do
    create table(:awards) do
      add :content, :string, null: false
      add :price, :integer, null: false
      add :provider, :string
      add :winner, :id, default: nil

      timestamps()
    end

    execute "ALTER SEQUENCE awards_id_seq RESTART WITH 100;"
  end
end
