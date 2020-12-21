# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :lucky_draw,
  ecto_repos: [LuckyDraw.Repo]

# Configures the endpoint
config :lucky_draw, LuckyDrawWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "gi5oh8wq6yA/CI4mXwZtG1SvIXDQEFtwXdrnvDxVrQvqGGyUb5/WhxAWn2D3Zd3c",
  render_errors: [view: LuckyDrawWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: LuckyDraw.PubSub,
  live_view: [signing_salt: "UByFXPxH"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
