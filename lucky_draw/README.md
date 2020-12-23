# LuckyDraw

Server for luckydraw app of 2020 year end party

## To start your Phoenix server:

  * Build Docker image with `docker-compose build`
  * Start Phoenix endpoint in Docker container with `docker-compose up`
  * You may encounter error when you first time start the server, fix with `docker-compose run web mix ecto.setup`

## Test

  * `docker-compose run web mix test`

## Run server in background

  * `docker-compose up -d`
  * stop with `docker-compose stop`
