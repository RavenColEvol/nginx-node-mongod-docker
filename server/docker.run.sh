#! /bin/sh
for (( i = 1; i <= 2; i++))
do 
    docker run \
        --name todos-server-$i \
        --env-file .env \
        --rm \
        -d \
        -v $(pwd):/app:ro \
        -v /app/node_modules \
        --network todos-network \
        todos:server
done