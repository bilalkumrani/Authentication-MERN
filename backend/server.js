const express = require("express");
const app = express();
const home = require("./Routes/homeRoutes");
require("./config");
const cors = require("cors");
const PORT = 4000;
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", home);

app.listen(PORT, () => {
  console.log("app is listening on port: ", PORT);
});
