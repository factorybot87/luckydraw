defmodule LuckyDraw.Repo.Migrations.CreateAwards do
  use Ecto.Migration

  def change do
    create table(:awards) do
      add :content, :string, null: false
      add :price, :integer, null: false
      add :provider_name, :string
      add :winner, :string

      timestamps()
    end
  end
end
