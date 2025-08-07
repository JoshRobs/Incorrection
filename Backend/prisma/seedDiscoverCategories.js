import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const categories = [
  "Video Games",
  "Movies",
  "TV Shows",
  "Anime",
  "Books",
  "Comics",
];

async function main() {
  for (const name of categories) {
    await prisma.discoverCategory.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Browse categories seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
