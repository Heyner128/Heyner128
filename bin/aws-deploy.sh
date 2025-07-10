#!/bin/bash
PORT=4321
docker compose up --detach --build --remove-orphans
sleep 20
curl --fail --retry 5 --retry-delay 10 --retry-connrefused http://localhost:${PORT}