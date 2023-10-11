import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });
export const getSingleCategory = router.get("/", async (req, res) => {
  const id = req.params.id;
  const allSubCategories = await prisma.subCategories.findMany({
    where: {
      categoriesId: Number(id),
    },
  });
  return res.json(allSubCategories);
});
