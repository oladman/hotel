const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding amenities to hotels...');

  const amenities = await prisma.amenity.findMany();
  const hotels = await prisma.hotel.findMany();

  if (amenities.length === 0) {
    console.log('No amenities found in the database. Please seed amenities first.');
    return;
  }

  if (hotels.length === 0) {
    console.log('No hotels found in the database. Please seed hotels first.');
    return;
  }

  for (const hotel of hotels) {
    const amenitiesToConnect = faker.helpers.shuffle(amenities).slice(0, 9);

    await prisma.hotel.update({
      where: { id: hotel.id },
      data: {
        amenities: {
          set: [], // Clear existing amenities first
          connect: amenitiesToConnect.map((amenity) => ({ id: amenity.id })),
        },
      },
    });
  }

  console.log('Finished seeding amenities to hotels.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
