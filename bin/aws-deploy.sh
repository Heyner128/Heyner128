#!/bin/bash
PORT=4321
PROJECT_NAME=portfolio
docker compose -p ${PROJECT_NAME} down
docker compose -p ${PROJECT_NAME} up --detach --build
sleep 20
curl --fail --retry 5 --retry-delay 10 --retry-connrefused http://localhost:${PORT}