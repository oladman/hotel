-- CreateTable
CREATE TABLE `Hotel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Country` VARCHAR(191) NOT NULL,
    `Hname` VARCHAR(191) NOT NULL,
    `Haddress` VARCHAR(191) NOT NULL,
    `Hdescription` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
