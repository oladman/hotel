-- CreateTable
CREATE TABLE `aboutCountry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `aboutCountryId` INTEGER NULL,

    INDEX `aboutCountry_aboutCountryId_idx`(`aboutCountryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `popularPlaces` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `about` LONGTEXT NOT NULL,
    `popularPlacesId` INTEGER NULL,

    INDEX `popularPlaces_popularPlacesId_idx`(`popularPlacesId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageContent` (
    `id` VARCHAR(191) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `imagesId` INTEGER NULL,

    INDEX `ImageContent_imagesId_idx`(`imagesId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aboutCountry` ADD CONSTRAINT `aboutCountry_aboutCountryId_fkey` FOREIGN KEY (`aboutCountryId`) REFERENCES `country`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `popularPlaces` ADD CONSTRAINT `popularPlaces_popularPlacesId_fkey` FOREIGN KEY (`popularPlacesId`) REFERENCES `country`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImageContent` ADD CONSTRAINT `ImageContent_imagesId_fkey` FOREIGN KEY (`imagesId`) REFERENCES `country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
