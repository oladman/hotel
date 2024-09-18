import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export async function POST(request) {
 try{
    const data = await request.json();
    const {countryName, CountryAttach, CountryDescription} = data;
    const newCountry = await prisma.country.create({
        data: {
           countryName,
           CountryAttach,
           CountryDescription
        }


    });

    return NextResponse.json(newCountry);
 } catch (error) {
    console.error("Error Adding Country:", error);
    return NextResponse.error("Internal Server Error", 500);
 }
}


   export async function GET() {
      try {
        const country = await prisma.country.findMany({
          include: {
            hotel: true,
          },
        });
    
        return NextResponse.json(country);
      } catch (error) {
        console.error("Error Fetching Country:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
      }
    }
