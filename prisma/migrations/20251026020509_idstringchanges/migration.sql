/*
  Warnings:

  - The primary key for the `Country` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "AboutCountry" DROP CONSTRAINT "AboutCountry_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_countryId_fkey";

-- DropForeignKey
ALTER TABLE "ImageContent" DROP CONSTRAINT "ImageContent_countryId_fkey";

-- DropForeignKey
ALTER TABLE "PopularPlace" DROP CONSTRAINT "PopularPlace_countryId_fkey";

-- AlterTable
ALTER TABLE "AboutCountry" ALTER COLUMN "countryId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Country" DROP CONSTRAINT "Country_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Country_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Country_id_seq";

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "countryId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ImageContent" ALTER COLUMN "countryId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PopularPlace" ALTER COLUMN "countryId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "AboutCountry" ADD CONSTRAINT "AboutCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopularPlace" ADD CONSTRAINT "PopularPlace_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageContent" ADD CONSTRAINT "ImageContent_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
