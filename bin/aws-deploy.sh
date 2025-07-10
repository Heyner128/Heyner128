#!/bin/bash
PORT=4321
docker compose -p portfolio down
docker compose -p portfolio up --detach --build
sleep 20
curl --fail --retry 5 --retry-delay 10 --retry-connrefused http://localhost:${PORT}