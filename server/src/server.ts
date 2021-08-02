import express from "express";
import cors from "cors";
import { queries } from "./queries";
import { User } from "./models/User";
import { sequelize } from "./database";
import { Customer } from "./models/Customer";
const port = 5000;

var corsOptions = {
  // origin: "http://192.168.29.216:8080",
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const db = sequelize;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", queries.getAllUsers);

app.patch("/save", queries.saveUser);

app.delete("/:id", queries.deleteUser);

app.put("/", queries.createUser);
app.get("/customers/", queries.getCustomers);

app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("Error connecting databse " + error);
    });
});
