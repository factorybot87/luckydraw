defmodule LuckyDrawWeb.Resolver.Lottery do
  def list_awards(_parent, _args, _resolution) do
    {:ok, LuckyDraw.Lottery.list_awards()}
  end
end
