-- AlterTable
ALTER TABLE "RoomType" ADD COLUMN "bathrooms" INTEGER,
ADD COLUMN "beds" INTEGER;

-- Update existing rows with a default value
UPDATE "RoomType" SET "bathrooms" = 1 WHERE "bathrooms" IS NULL;
UPDATE "RoomType" SET "beds" = 1 WHERE "beds" IS NULL;

-- Alter columns to be NOT NULL
ALTER TABLE "RoomType" ALTER COLUMN "bathrooms" SET NOT NULL;
ALTER TABLE "RoomType" ALTER COLUMN "beds" SET NOT NULL;