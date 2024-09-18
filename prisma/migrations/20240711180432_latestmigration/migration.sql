/*
  Warnings:

  - The primary key for the `hotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `hotelPrice` to the `hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotel` DROP PRIMARY KEY,
    ADD COLUMN `countryId` INTEGER NULL,
    ADD COLUMN `forestView` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `hotelPrice` INTEGER NOT NULL,
    ADD COLUMN `mountainView` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `oceanView` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `rating` INTEGER NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `Hdescription` LONGTEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `hotel_countryId_idx` ON `hotel`(`countryId`);

-- AddForeignKey
ALTER TABLE `hotel` ADD CONSTRAINT `hotel_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
