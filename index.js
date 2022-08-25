const express = require("express");
const app = express();
const dishesRoute = require("./routes/Dishes");
const permotionRoute = require("./routes/Pormotions");
const leaderRoute = require("./routes/Leaders");
// To server the application build in experss json Format;

app.use(express.json());
const host = "localhost";
const port = 5000;

// Now we use the app.use;
// Dish Route
app.use("/dishes", dishesRoute);
// permotion Route
app.use("/permotions", permotionRoute);
// leader Route
app.use("/leaders", leaderRoute);

// Listen the app of our server;
app.listen(port, () => {
  console.log(`server is running at ${host}:${port}`);
});
