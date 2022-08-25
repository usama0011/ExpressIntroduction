const router = require("express").Router();
const dummyPermotions = require("../json/PermotionData.json");
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
      let dataSend = dummyPermotions;
      res.status(200).json(dataSend);
    } catch (error) {
      res.status(500).json(error);
    }
  }) //POST METHOD
  .post((req, res, next) => {
    try {
      const newPermotion = {};
      newPermotion.permotionName = req.body.permotionName;
      newPermotion.description = req.body.description;
      res
        .status(201)
        .send(
          `The New Dish is ${newPermotion.permotionName} and the description is :${newPermotion.description}`
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
      res.status(200).send("You Permotion has been Delete Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  });
//   Now we Apdate the  Additioon Id Params of  All Get POST PUT DELETE;

router //GET BY ID
  .route("/:id")
  .get((req, res, next) => {
    try {
      let permotionData = dummyPermotions;
      let findDish = req.params.id;
      let getPermotion = permotionData.find((dish) => {
        return dish.id === findDish;
      });
      res.status(200).json(getPermotion);
    } catch (error) {
      res.status(500).json(error);
    }
  }) //UPDATE BY ID
  .put((req, res, next) => {
    try {
      let updatePermotion = {};
      let permotionID = req.params.id;
      let dishList = dummyPermotions.find((dish) => dish.id === permotionID);
      updatePermotion.permotionName = req.body.permotionName;
      updatePermotion.description = req.body.description;
      dishList.permotionName = updatePermotion.permotionName;
      dishList.description = updatePermotion.description;
      res.status(200).send("Permotion has been Updated Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }) //DELETE BY ID
  .delete((req, res, next) => {
    try {
      let deletepermotionID = req.params.id;
      let permotions = dummyPermotions.filter(
        (dish) => dish.id !== deletepermotionID
      );
      res.status(200).send(permotions);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
