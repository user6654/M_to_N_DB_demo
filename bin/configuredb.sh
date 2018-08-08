#!/bin/bash

export PGPASSWORD='node_password'

database="enrollmentsdb"

echo "Configuring database: $database"

docker exec -i 28386bad467f dropdb -U node_user enrollmentsdb
docker exec -i 28386bad467f createdb -U node_user enrollmentsdb

docker exec -i 28386bad467f psql -U node_user enrollmentsdb < ./bin/sql/enrollments.sql


echo "$database configured"