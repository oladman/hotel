import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client";
import { writeFile } from 'fs/promises'

const prisma = new PrismaClient();






export async function POST(request) {
    const data = await request.formData()
    const file = data.get('image')
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
  
    if (!file) {
      return NextResponse.json({ success: false })
    }
  
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
  
    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = `/tmp/${file.name}`
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)
  
    return NextResponse.json({ success: true })
  }