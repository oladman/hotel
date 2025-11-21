/*
  Warnings:

  - You are about to drop the column `bar` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `forestView` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `gym` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `hotelPrice` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `internet` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `mountainView` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `oceanView` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `pet` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `spa` on the `Hotel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "bar",
DROP COLUMN "forestView",
DROP COLUMN "gym",
DROP COLUMN "hotelPrice",
DROP COLUMN "internet",
DROP COLUMN "mountainView",
DROP COLUMN "oceanView",
DROP COLUMN "pet",
DROP COLUMN "spa",
ADD COLUMN     "startingPrice" DECIMAL(10,2);

-- CreateTable
CREATE TABLE "Amenity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HotelAmenities" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_name_key" ON "Amenity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_slug_key" ON "Amenity"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_HotelAmenities_AB_unique" ON "_HotelAmenities"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelAmenities_B_index" ON "_HotelAmenities"("B");

-- AddForeignKey
ALTER TABLE "_HotelAmenities" ADD CONSTRAINT "_HotelAmenities_A_fkey" FOREIGN KEY ("A") REFERENCES "Amenity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelAmenities" ADD CONSTRAINT "_HotelAmenities_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
