import { PrismaClient } from "@prisma/client";
import { categories } from "../seedingItems/categories.js";
import { subcategories } from "../seedingItems/subcategories.js";
const prisma = new PrismaClient();

async function main() {
  for (let category of categories) {
    try {
      await prisma.categories.create({
        data: {
          title: category,
        },
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  for (let subcategory of subcategories) {
    try {
      await prisma.subCategories.create({
        data: {
          title: subcategory.title,
          categoriesId: subcategory.categoriesId,
        },
      });
    } catch (e) {
      console.log(e.message);
    }
  }
}
main()
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
