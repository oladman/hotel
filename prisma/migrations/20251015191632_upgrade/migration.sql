/*
  Warnings:

  - You are about to drop the column `roomId` on the `Extra` table. All the data in the column will be lost.
  - You are about to drop the column `countryName` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `basePrice` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `hotelId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `maxOccupancy` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomTitle` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `sizeSqFt` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `Tax` table. All the data in the column will be lost.
  - Added the required column `roomNumber` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomTypeId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "Tax" DROP CONSTRAINT "Tax_roomId_fkey";

-- AlterTable
ALTER TABLE "Extra" DROP COLUMN "roomId",
ADD COLUMN     "roomTypeId" TEXT;

-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "countryName";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "basePrice",
DROP COLUMN "description",
DROP COLUMN "hotelId",
DROP COLUMN "maxOccupancy",
DROP COLUMN "roomTitle",
DROP COLUMN "sizeSqFt",
DROP COLUMN "totalPrice",
ADD COLUMN     "roomNumber" TEXT NOT NULL,
ADD COLUMN     "roomTypeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tax" DROP COLUMN "roomId",
ADD COLUMN     "roomTypeId" TEXT;

-- CreateTable
CREATE TABLE "RoomType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "sizeSqFt" INTEGER,
    "maxOccupancy" INTEGER,
    "basePrice" DECIMAL(10,2) NOT NULL,
    "totalCount" INTEGER NOT NULL,
    "availableCount" INTEGER NOT NULL,
    "hotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoomType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomType" ADD CONSTRAINT "RoomType_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tax" ADD CONSTRAINT "Tax_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
