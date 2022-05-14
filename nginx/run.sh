#! /bin/sh
docker run \
    --network todos-network \
    --name todos-nginx \
    -p 8000:80 \
    --rm \
    todos:nginx