import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function PUT(request, { params }) {
    try{
       const data = await request.json();
       console.log(data)
       const {Country, Hname, Haddress, Hdescription} = data;
       const id = parseInt(params.id);

       const updateHotel = await prisma.hotel.update({
        where: {id}, 
           data: {
               Country,
               Hname,
               Haddress,
               Hdescription
           }
   
   
       });
   
       return NextResponse.json(updateHotel);
    } catch (error) {
       console.error("Error Updating Hotel:", error);
       return NextResponse.error("Internal Server Error", 500);
    }
   }



   export async function DELETE(request, { params }) {
    try{
       const data = await request.json();
       console.log(data)
       const {Country, Hname, Haddress, Hdescription} = data;
       const id = parseInt(params.id);

       const deleteHotel = await prisma.hotel.delete({
        where: {id}, 
   
   
       });
   
       return NextResponse.json(deleteHotel);
    } catch (error) {
       console.error("Error Hotel Deleted Hotel:", error);
       return NextResponse.error("Internal Server Error", 500);
    }
   }