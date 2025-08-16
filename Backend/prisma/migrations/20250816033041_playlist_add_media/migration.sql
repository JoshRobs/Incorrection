/*
  Warnings:

  - You are about to drop the column `appUserId` on the `Playlist` table. All the data in the column will be lost.
  - Added the required column `description` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Trivia` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."HintType" AS ENUM ('TEXT', 'IMAGE', 'AUDIO');

-- AlterEnum
ALTER TYPE "public"."Category" ADD VALUE 'COMICS';

-- DropForeignKey
ALTER TABLE "public"."Playlist" DROP CONSTRAINT "Playlist_appUserId_fkey";

-- AlterTable
ALTER TABLE "public"."DiscoverCategory" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "public"."Playlist" DROP COLUMN "appUserId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "favourites" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "media" "public"."Category"[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Trivia" ADD COLUMN     "correctCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "dislikes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "public"."Hint" (
    "id" SERIAL NOT NULL,
    "triviaId" INTEGER NOT NULL,
    "type" "public"."HintType" NOT NULL,
    "content" TEXT,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hint_triviaId_key" ON "public"."Hint"("triviaId");

-- AddForeignKey
ALTER TABLE "public"."Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hint" ADD CONSTRAINT "Hint_triviaId_fkey" FOREIGN KEY ("triviaId") REFERENCES "public"."Trivia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
