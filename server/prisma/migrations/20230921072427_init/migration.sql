-- CreateTable
CREATE TABLE "SubCategories" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "categoriesId" INTEGER,

    CONSTRAINT "SubCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubCategories" ADD CONSTRAINT "SubCategories_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
