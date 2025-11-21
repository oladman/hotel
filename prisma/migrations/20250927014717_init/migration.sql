-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT NOT NULL,
    "CountryAttach" TEXT NOT NULL,
    "CountryDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel" (
    "id" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "Hname" TEXT NOT NULL,
    "Haddress" TEXT NOT NULL,
    "Hdescription" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "hotelPrice" INTEGER NOT NULL,
    "oceanView" BOOLEAN NOT NULL DEFAULT false,
    "forestView" BOOLEAN NOT NULL DEFAULT false,
    "mountainView" BOOLEAN NOT NULL DEFAULT false,
    "countryId" INTEGER,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aboutCountry" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "aboutCountryId" INTEGER,

    CONSTRAINT "aboutCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "popularPlaces" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "popularPlacesId" INTEGER,

    CONSTRAINT "popularPlaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageContent" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imagesId" INTEGER,

    CONSTRAINT "ImageContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "hotel_countryId_idx" ON "hotel"("countryId");

-- CreateIndex
CREATE INDEX "aboutCountry_aboutCountryId_idx" ON "aboutCountry"("aboutCountryId");

-- CreateIndex
CREATE INDEX "popularPlaces_popularPlacesId_idx" ON "popularPlaces"("popularPlacesId");

-- CreateIndex
CREATE INDEX "ImageContent_imagesId_idx" ON "ImageContent"("imagesId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "hotel" ADD CONSTRAINT "hotel_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aboutCountry" ADD CONSTRAINT "aboutCountry_aboutCountryId_fkey" FOREIGN KEY ("aboutCountryId") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "popularPlaces" ADD CONSTRAINT "popularPlaces_popularPlacesId_fkey" FOREIGN KEY ("popularPlacesId") REFERENCES "country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageContent" ADD CONSTRAINT "ImageContent_imagesId_fkey" FOREIGN KEY ("imagesId") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
