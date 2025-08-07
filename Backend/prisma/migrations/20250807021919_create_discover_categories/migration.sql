/*
  Warnings:

  - Added the required column `userId` to the `Trivia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Playlist" ADD COLUMN     "appUserId" TEXT;

-- AlterTable
ALTER TABLE "public"."Trivia" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."AppUser" (
    "id" TEXT NOT NULL,
    "supabaseId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "bio" TEXT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DiscoverCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DiscoverCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_supabaseId_key" ON "public"."AppUser"("supabaseId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscoverCategory_name_key" ON "public"."DiscoverCategory"("name");

-- AddForeignKey
ALTER TABLE "public"."Playlist" ADD CONSTRAINT "Playlist_appUserId_fkey" FOREIGN KEY ("appUserId") REFERENCES "public"."AppUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Trivia" ADD CONSTRAINT "Trivia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
