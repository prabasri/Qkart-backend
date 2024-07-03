const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const router = express.Router();

const validateParams = (req, res, next) => {
    // const {id} = req.params;
    // const {error} = userValidation.getUser.params.validate({id});  // destructuring is used here as we are taking this error key from result object as shown in above function (result.error).
    if(error) {
      res.status(422).json(error);
    }
    next();
  }

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
router.get("/:userId", validate(userValidation.getUser), userController.getUser);
router.post("/new", userController.createUser);

module.exports = router;
