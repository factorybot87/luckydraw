defmodule LuckyDrawWeb.Router do
  use LuckyDrawWeb, :router

  pipeline :api do
    plug CORSPlug
  end

  scope "/api" do
    pipe_through :api
    forward "/", Absinthe.Plug, schema: LuckyDrawWeb.Schema
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: LuckyDrawWeb.Telemetry
    end

    scope "/graphiql" do
      forward "/", Absinthe.Plug.GraphiQL,
        schema: LuckyDrawWeb.Schema,
        interface: :playground,
        context: %{pubsub: LuckyDrawWeb.Endpoint}
    end
  end
end
