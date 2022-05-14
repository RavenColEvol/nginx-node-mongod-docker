#! /bin/sh
docker run \
    --network todos-network \
    -v $(pwd)/data:/data/db \
    --name mongodb mongo:4.4