
-- AlterTable
ALTER TABLE "Country" RENAME COLUMN "countryName" TO "name";
ALTER TABLE "Country" RENAME COLUMN "countryAttach" TO "image";
ALTER TABLE "Country" RENAME COLUMN "countryDescription" TO "description";

-- AlterTable
ALTER TABLE "Hotel" RENAME COLUMN "Hname" TO "name";
ALTER TABLE "Hotel" RENAME COLUMN "Haddress" TO "address";
ALTER TABLE "Hotel" RENAME COLUMN "Hdescription" TO "description";

-- AlterTable
ALTER TABLE "ImageContent" RENAME COLUMN "imageUrl" TO "url";

-- AlterTable
ALTER TABLE "PopularPlace" RENAME COLUMN "placeName" TO "name";

-- AlterTable
ALTER TABLE "RoomTypeImage" RENAME COLUMN "imageUrl" TO "url";
