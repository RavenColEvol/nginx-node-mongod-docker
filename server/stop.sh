#! /bin/sh
for (( i = 1; i <= 2; i++))
do 
    docker stop todos-server-$i
done