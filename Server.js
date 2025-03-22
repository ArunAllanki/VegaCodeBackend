const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.port || 5000;
const compression = require("compression");
const IRoutes = require("./Routes/InventoryRoutes");
app = express();
app.use(express.json());
app.use(compression());
app.use(cors());

const db_URI =
  "mongodb+srv://Seva:seva.123@cluster0.ymmt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
  })
  .then(() => {
    console.log("DB connected succesfully....");
  })
  .catch((error) => {
    console.log(`Error connecting DB : ${error}`);
  });

app.use("/fItems", IRoutes);

app.listen(port, () => {
  console.log(`Server serving to port ${port}......`);
});
