import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();
export const deleteAllUsers = router.delete("/", async (req, res) => {
    await prisma.user.deleteMany({});
});