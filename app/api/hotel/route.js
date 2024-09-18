import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(request) {
 try{
    const data = await request.json();
    console.log(data)
    const {Country, Hname, Haddress, Hdescription, image} = data;
    const newHotel = await prisma.hotel.create({
        data: {
            Country,
            Hname,
            Haddress,
            Hdescription,
            image
        }


    });

    return NextResponse.json(newHotel);
 } catch (error) {
    console.error("Error Creating Hotel:", error);
    return NextResponse.error("Internal Server Error", 500);
 }
}


export async function GET() {
    try{
       
       const hotel= await prisma.hotel.findMany();
   
       return NextResponse.json(hotel);
    } catch (error) {
       console.error("Error Fetching Hotel:", error);
       return NextResponse.error("Internal Server Error", 500);
    }
   }

 