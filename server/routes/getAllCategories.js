import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
export const getAllCategories = router.get("/", async (req, res) => {
  const allCategories = await prisma.categories.findMany();
  return res.json(allCategories);
});
