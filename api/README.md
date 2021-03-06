## To run
*Assuming my windows 10 laptop and an eventual goal of platform agnostic*

### server 
You'll need node installed.
```
yarn start
```
This uses nodemon to watch for code changes and automatically restart.

By default the apollo server runs on port 4000.  
Opening `http://localhost:4000/` will open a GraphQL Playground over the API.

### database
You'll need docker and docker-compose installed.
Make sure docker is running and you don't have any old containers under the same name.
```
docker-compose up
```

Connect via shell client:
```
winpty docker exec -it mongodb mongo

```
You could also forsake gitbash and ditch the winpty. Would be cool to start using linux subsystem at some point.

If you're more in the mood for a GUI, you can connect via Robo 3T.
IP address will be the host address for the docker daemon and the mongo default port: `192.168.99.100:27017`

#### on first run
```
> use wip-tracker
> db.projects.save({ name: "Zaubersocks", recipient: "Grandma"})
> db.projects.save({ name: "pie", recipient: "Gareth", image:"test-images\pie.jpg"})
> db.projects.save({ name: "Harry Potter scarf", recipient: "Tristan"})
```

## To do
[X] ~~Retrieve projects from database~~  
[X] ~~Add watcher for js changes to avoid having to keep restarting the server~~  
[ ] What are the different ways a mongo connection can fail? https://mongoosejs.com/docs/connections.html  
[ ] integration tests/unit tests?

[ ] any remaining first run db instructions should move to start up script. Not sure I'll need this as mongo creates the db upon first insertion.  
[ ] Find out why I can't seem to use ES6 module syntax even though I'm running node 12.  
[ ] container for api in the docker-compose file using node 12

## References

https://www.apollographql.com/docs/apollo-server/getting-started/