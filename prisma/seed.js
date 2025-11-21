const { PrismaClient, BookingStatus, PaymentMethod, PaymentStatus, PromoType, UserRole } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");



  // ----- COUNTRIES -----
  const countriesData = [
    {
      countryName: "France",
      countryAttach: "🇫🇷",
      countryDescription: "France is known for its art, cuisine, and romantic charm.",
      code: "FR",
    },
    {
      countryName: "United States",
      countryAttach: "🇺🇸",
      countryDescription: "A diverse nation known for innovation, cities, and natural beauty.",
      code: "US",
    },
    {
      countryName: "Japan",
      countryAttach: "🇯🇵",
      countryDescription: "Japan combines tradition, technology, and breathtaking landscapes.",
      code: "JP",
    },
    {
      countryName: "United Kingdom",
      countryAttach: "🇬🇧",
      countryDescription: "A historic nation famous for London, castles, and culture.",
      code: "UK",
    },
    {
      countryName: "Russia",
      countryAttach: "🇷🇺",
      countryDescription: "A vast country rich in history, art, and architecture.",
      code: "RU",
    },
    {
      countryName: "China",
      countryAttach: "🇨🇳",
      countryDescription: "An ancient civilization with modern innovations.",
      code: "CN",
    },
    {
      countryName: "Italy",
      countryAttach: "🇮🇹",
      countryDescription: "Home to world-famous art, fashion, and cuisine.",
      code: "IT",
    },
    {
      countryName: "Canada",
      countryAttach: "🇨🇦",
      countryDescription: "Known for its friendly people and stunning natural landscapes.",
      code: "CA",
    },
  ];

  const countries = [];
  for (const data of countriesData) {
    const country = await prisma.country.create({
      data: {
        ...data,
        aboutCountries: {
          create: {
            title: "About " + data.countryName,
            description: `${data.countryName} offers unique attractions and experiences.`,
          },
        },
        popularPlaces: {
          create: [
            {
              placeName: `${data.countryName} Landmark`,
              description: `A popular destination in ${data.countryName}.`,
              images: {
                create: [
                  { url: `https://example.com/${data.code.toLowerCase()}-1.jpg`, caption: `${data.countryName} View` },
                ],
              },
            },
          ],
        },
      },
    });
    countries.push(country);
  }

  // ----- HOTELS -----
  const hotel = await prisma.hotel.create({
    data: {
      Hname: "Global Grand Hotel",
      Haddress: "123 World Avenue",
      Hdescription: "A 5-star luxury hotel with global presence.",
      image: "https://example.com/hotel.jpg",
      rating: 4.9,
      startingPrice: 300.0,
      countryId: countries[0].id, 
      amenities: {
        create: [
          { name: "Free Wi-Fi", slug: "wifi" },
          { name: "Swimming Pool", slug: "pool" },
          { name: "Gym", slug: "gym" },
        ],
      },
      images: {
        create: [
          { url: "https://example.com/hotel-lobby.jpg", caption: "Hotel Lobby" },
          { url: "https://example.com/hotel-room.jpg", caption: "Deluxe Room" },
        ],
      },
    },
  });

  // ----- ROOM TYPE -----
  const roomType = await prisma.roomType.create({
    data: {
      name: "Presidential Suite",
      description: "Luxury suite with city skyline view.",
      sizeSqFt: 800,
      maxOccupancy: 4,
      basePrice: 500.00,
      totalCount: 5,
      availableCount: 4,
      hotelId: hotel.id,
      roomTypeImages: {
        create: [{ imageUrl: "https://example.com/suite.jpg", caption: "Presidential Suite" }],
      },
      extras: {
        create: [
          { name: "Champagne", description: "Welcome champagne bottle", price: 50.00 },
          { name: "Breakfast", description: "Complimentary breakfast", price: 25.00 },
        ],
      },
      taxes: {
        create: [{ name: "City Tax", rate: 15.0 }],
      },
    },
  });

  
  const room = await prisma.room.create({
    data: {
      roomNumber: "P101",
      roomTypeId: roomType.id,
    },
  });


  await prisma.promotion.create({
    data: {
      name: "Summer Sale",
      description: "15% off all luxury rooms during summer.",
      type: PromoType.PERCENTAGE,
      value: 15,
      validFrom: new Date("2025-06-01"),
      validTo: new Date("2025-09-01"),
      hotels: {
        connect: { id: hotel.id },
      },
    },
  });

;


  console.log("✅ Seeding complete with multiple countries!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
