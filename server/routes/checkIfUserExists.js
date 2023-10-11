import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });
export const checkIfUserExists = router.get("/", async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      login: req.params.email,
    },
  });
  if (user) {
    return res.json(user);
  } else {
    return res.send({
      isFound: false,
    });
  }
});
