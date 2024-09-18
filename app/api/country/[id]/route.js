import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET(request, { params }) {

    try{
        const id = parseInt(params.id);
        
       
        const country = await prisma.country.findUnique({
            where: {id,

            },
            include: {
                hotel:true,
                aboutCountry:true,
                ImageContent:true,
                popularPlaces:true
              }
        });
    
        return NextResponse.json(country);
     } catch (error) {
        console.error("Error Fetching Country:", error);
        return NextResponse.error("Internal Server Error", 500);
     }


    
   }