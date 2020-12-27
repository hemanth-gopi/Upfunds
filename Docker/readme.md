

**Instructions for running the docker**

[https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3](https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3)


# Execution

Now run the docker-compose file with  `$ docker-compose up`  or`$ docker-compose up -d`  to run containers in the background

Open another terminal to login to the container. Type  `$ docker container ls`  to see our running container

**Login to your container by using container names**

    $ docker exec -it <container-name> bash


**Login to MongoDB with created User & Database by using**

    $ mongo -u <your username> -p <your password> --authenticationDatabase <your database name>### OR ###$ mongo -u <your username> --authenticationDatabase <your database name>


# Finally

Now you have created your Persistent MongoDB container, your MongoDB user, superuser, and database. 
You can connect your program to the database by using this URL as a connection 

	 `mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name`

Thank you for reading!