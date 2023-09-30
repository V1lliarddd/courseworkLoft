//Prisma, prisma-client, nodemon,express, cors установлены
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import { getAllCategories } from "./routes/getAllCategories.js";
import { getSingleCategory } from "./routes/getSingleCategory.js";
import { checkIfUserExists } from "./routes/checkIfUserExists.js";
import { addUser } from "./routes/addUser.js";
const app = express();
const port = 3002;
app.use(cors());
app.use(bodyParser.json());
// RETURN ALL CATEGORIES FUNCTION
app.use("/categories", getAllCategories);
// RETURN CATEGORY'S PAGE FUNCTION
app.use("/categories/:id", getSingleCategory);
// CHECK IF USER EXISTS FUNCTION
app.use("/checkUser/:email", checkIfUserExists);
// ADD USER FUNCTION
app.use("/addUser", addUser);
// DELETE ALL USERS
app.delete("/deleteAllUsers", async (req, res) => {
  await prisma.user.deleteMany({});
});
app.listen(port, () => {});
