#!/usr/bin/env bash
docker-compose up --build -d && \
docker system prune
echo "Docker-compose up!"