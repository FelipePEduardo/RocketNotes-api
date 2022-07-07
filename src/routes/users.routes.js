const { Router } = require("express");

const UserController = require("../controllers/UserController")

const usersRoutes = Router();

/* function myMiddleware (request, response, next) {
  console.log("Você passou pelo middleware!")

  if(!request.body.isAdmin) {
    return response.json({ message: "user unauthorized"})
  }
  
  next();
}
*/

const userController = new UserController();

// usersRoutes.use(myMiddleware)
// usersRoutes.post("/", myMiddleware, userController.create)
usersRoutes.post("/", userController.create)
usersRoutes.put("/:id", userController.update)

module.exports = usersRoutes;