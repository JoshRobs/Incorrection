/*
  Warnings:

  - You are about to drop the column `title` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `PlaylistQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PlaylistQuestion" DROP CONSTRAINT "PlaylistQuestion_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PlaylistQuestion" DROP CONSTRAINT "PlaylistQuestion_questionId_fkey";

-- AlterTable
ALTER TABLE "public"."Playlist" DROP COLUMN "title",
DROP COLUMN "userId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."PlaylistQuestion";

-- DropTable
DROP TABLE "public"."Question";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."Trivia" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "correction" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trivia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PlaylistTrivia" (
    "playlistId" INTEGER NOT NULL,
    "triviaId" INTEGER NOT NULL,

    CONSTRAINT "PlaylistTrivia_pkey" PRIMARY KEY ("playlistId","triviaId")
);

-- AddForeignKey
ALTER TABLE "public"."PlaylistTrivia" ADD CONSTRAINT "PlaylistTrivia_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "public"."Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlaylistTrivia" ADD CONSTRAINT "PlaylistTrivia_triviaId_fkey" FOREIGN KEY ("triviaId") REFERENCES "public"."Trivia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
