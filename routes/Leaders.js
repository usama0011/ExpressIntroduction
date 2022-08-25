const router = require("express").Router();
const dummyLeaders = require("../json/LeadersData.json");

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
      let dataSend = dummyLeaders;
      res.status(200).json(dataSend);
    } catch (error) {
      res.status(500).json(error);
    }
  }) //POST METHOD
  .post((req, res, next) => {
    try {
      const newLeaders = {};
      newLeaders.leaderName = req.body.leaderName;
      newLeaders.description = req.body.description;
      res
        .status(201)
        .send(
          `The New Dish is ${newLeaders.leaderName} and the description is :${newLeaders.description}`
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
      res.status(200).send("You Leader has been Delete Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  });
//   Now we Apdate the  Additioon Id Params of  All Get POST PUT DELETE;

router //GET BY ID
  .route("/:id")
  .get((req, res, next) => {
    try {
      let leaders = dummyLeaders;
      let findDish = req.params.id;
      let getleader = leaders.find((dish) => {
        return dish.id === findDish;
      });
      res.status(200).json(getleader);
    } catch (error) {
      res.status(500).json(error);
    }
  }) //UPDATE BY ID
  .put((req, res, next) => {
    try {
      let updatedLeaders = {};
      let leaderID = req.params.id;
      let leaderList = dummyLeaders.find((dish) => dish.id === leaderID);
      updatedLeaders.leaderName = req.body.leaderName;
      updatedLeaders.description = req.body.description;
      leaderList.leaderName = updatedLeaders.leaderName;
      leaderList.description = updatedLeaders.description;
      res.status(200).send("leader has been Updated Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }) //DELETE BY ID
  .delete((req, res, next) => {
    try {
      let leaderID = req.params.id;
      let leaders = dummyLeaders.filter((dish) => dish.id !== leaderID);
      res.status(200).send(leaders);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
