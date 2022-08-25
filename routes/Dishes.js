const router = require("express").Router();
const dummnyDishes = require("../json/DishesData.json");

// Get Method;
router
  .route("/") //GET ALL METHOD
  .all((req, res, next) => {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      next();
    } catch (error) {
      res.status(500).json(error);
    }
  }) //GET METHOD
  .get((req, res, next) => {
    try {
      let dataSend = dummnyDishes;
      res.status(200).json(dataSend);
    } catch (error) {
      res.status(500).json(error);
    }
  }) //POST METHOD
  .post((req, res, next) => {
    try {
      const newDish = {};
      newDish.dishName = req.body.dishName;
      newDish.description = req.body.description;
      res
        .status(201)
        .send(
          `The New Dish is ${newDish.dishName} and the description is :${newDish.description}`
        );
    } catch (error) {
      res.status(500).json(error);
    }
  }) //PUT METHOD
  .put((req, res, next) => {
    try {
      res.status(403).send("Some Featured is not Implemented Yet..");
    } catch (error) {
      res.status(500).json(error);
    }
  }) //DELETE MEHTOD
  .delete((req, res, next) => {
    try {
      res.status(200).send("You Dish has been Delete Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  });
//   Now we Apdate the  Additioon Id Params of  All Get POST PUT DELETE;

router //GET BY ID
  .route("/:id")
  .get((req, res, next) => {
    try {
      let dishesData = dummnyDishes;
      let findDish = req.params.id;
      let getDish = dishesData.find((dish) => {
        return dish.id === findDish;
      });
      res.status(200).json(getDish);
    } catch (error) {
      res.status(500).json(error);
    }
  }) //UPDATE BY ID
  .put((req, res, next) => {
    try {
      let UpdateDish = {};
      let dishID = req.params.id;
      let dishList = dummnyDishes.find((dish) => dish.id === dishID);
      UpdateDish.dishName = req.body.dishName;
      UpdateDish.description = req.body.description;
      dishList.dishName = UpdateDish.dishName;
      dishList.description = UpdateDish.description;
      res.status(200).send("Dish has been Updated Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }) //DELETE BY ID
  .delete((req, res, next) => {
    try {
      let deleteDishID = req.params.id;
      let dishes = dummnyDishes.filter((dish) => dish.id !== deleteDishID);
      res.status(200).send(dishes);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
