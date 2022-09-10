const UserController = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authjwt");

function registerUserRoutes(app) {
  app.post("/api/signup", UserController.signup);
  app.post("/api/login", UserController.login);
  
  app.get("/api/users", UserController.getAllUsers);
  app.get('/api/users/:email', UserController.findUser);
  app.get('/api/user/:id', UserController.findUserById)
//   app.get("/api/users", authenticate, UserController.getAllUsers);
}


module.exports = registerUserRoutes;
