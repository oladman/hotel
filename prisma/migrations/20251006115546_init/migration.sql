/*
  Warnings:

  - You are about to drop the column `image` on the `PopularPlace` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PopularPlace" DROP COLUMN "image";

-- CreateTable
CREATE TABLE "PopularPlaceImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "caption" TEXT,
    "popularPlaceId" INTEGER NOT NULL,

    CONSTRAINT "PopularPlaceImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HotelToPopularPlace" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HotelToPopularPlace_AB_unique" ON "_HotelToPopularPlace"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelToPopularPlace_B_index" ON "_HotelToPopularPlace"("B");

-- AddForeignKey
ALTER TABLE "PopularPlaceImage" ADD CONSTRAINT "PopularPlaceImage_popularPlaceId_fkey" FOREIGN KEY ("popularPlaceId") REFERENCES "PopularPlace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToPopularPlace" ADD CONSTRAINT "_HotelToPopularPlace_A_fkey" FOREIGN KEY ("A") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToPopularPlace" ADD CONSTRAINT "_HotelToPopularPlace_B_fkey" FOREIGN KEY ("B") REFERENCES "PopularPlace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
