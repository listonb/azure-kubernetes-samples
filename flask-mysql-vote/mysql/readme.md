Create network

```
docker network create azure-vote
```

Start MySQL Container

```
docker run -v /tmp/docker-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Password12 -e MYSQL_USER=dbuser -e MYSQL_PASSWORD=Password12 -e MYSQL_DATABASE=azurevote -p 3306:3306 -d mysql-azure-vote
```

Start voting app container

```
docker run -d -p 8000:8000 -e MYSQL_DATABASE_USER=dbuser -e MYSQL_DATABASE_PASSWORD=Password12 -e MYSQL_DATABASE_DB=azurevote -e MYSQL_DATABASE_HOST=mysql --network mysql azure-vote
```