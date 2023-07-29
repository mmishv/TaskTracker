#!/bin/bash

until mongo --host mongodb --eval "print(\"MongoDB is up\")"
do
    sleep 1
done

python manage.py migrate

exec "$@"
