# LuckyDraw

Server for luckydraw app of 2020 year end party

## To start your Phoenix server:

  * Build Docker image with `docker-compose build`
  * Start Phoenix endpoint in Docker container with `docker-compose up`
  * You may encounter error when you first time start the server, fix with `docker-compose run web mix ecto.setup`

## Reset database

  * `docker-compose run --rm web mix ecto.reset`

## Test

  * `docker-compose run web mix test`

## Run server in background

  * `docker-compose up -d`
  * stop with `docker-compose stop`

## Script

  * `ruby script/puts.rb <filename>`
  * copy and paste output result to `priv/repo/seeds.exs`
  * reset database

## Screenshot

<img width="640" alt="Screen Shot 2021-12-08 at 12 06 18 PM" src="https://user-images.githubusercontent.com/79628930/145146652-e390aac8-2ebd-4c9b-b394-86fc12eb068e.png">
