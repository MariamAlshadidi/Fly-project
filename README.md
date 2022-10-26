<h1 align="center">
🌐Fly-Booking MERN Stack
</h1>
<p align="center">
MERN is a fullstack implementation in MongoDB, Expressjs, React.js, Nodejs
</p>


## clone or download
```terminal
$ git clone https://github.com/MariamAlshadidi/Fly-project.git
$ yarn # or npm i
```
## project structure
```terminal
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```
# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
bootstrap: ^5.2.0" | jquery: ^3.6.1
axios: ^0.27.2 | bcrypt-nodejs: ^5.0.1
jsonwebtoken: ^8.5.1 | cors: ^2.8.1
react: ^18.2.0 | dotenv: ^16.0.2
react-dom: ^18.2.0 | express: ^4.18.1
react-router-dom: ^5.3.3 | mongoose: ^4.7.4


