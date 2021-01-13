alias LuckyDraw.Lottery

defmodule LuckyDrawWeb.Resolver.Lottery do
  def list_awards(_parent, _args, _resolution) do
    {:ok, Lottery.list_awards()}
  end

  def get_award(_parent, %{id: id}, _resolution) do
    {:ok, Lottery.get_award!(id)}
  end

  def create_award(_parent, args, _resolution) do
    Lottery.create_award(args)
  end

  def update_award(_parent, %{id: id} = args, _resolution) do
    id
    |> Lottery.get_award!()
    |> Lottery.update_award(args)
  end

  def delete_award(_parent, %{id: id}, _resolution) do
    id
    |> Lottery.get_award!()
    |> Lottery.delete_award()
  end
end
