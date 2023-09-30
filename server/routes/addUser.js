import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
const router = express.Router();
export const addUser = router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      login: req.body.email,
      password: hashedPassword,
      name: req.body.name,
      phone_number: req.body.phone,
    };
    await prisma.user.create({
      data: {
        login: newUser.login,
        password: newUser.password,
        name: newUser.name,
        phone_number: newUser.phone_number,
      },
    });
    console.log("server ok!");
    return res.json("Успешно");
  } catch (e) {
    console.log(e.message);
  }
});
