import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
export const checkIfUserExists = router.get("/", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await prisma.user.findFirst({
      where: {
        login: email,
      },
    });
    return res.json(user);
  } catch (e) {
    console.log(e.message);
  }
});
