/*
  Warnings:

  - You are about to drop the column `question` on the `Trivia` table. All the data in the column will be lost.
  - Added the required column `category` to the `Trivia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highlightEnd` to the `Trivia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highlightStart` to the `Trivia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `incorrectStatement` to the `Trivia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Trivia` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('GAMES', 'ANIME', 'TV_SHOW', 'MOVIES', 'BOOKS');

-- AlterTable
ALTER TABLE "public"."Trivia" DROP COLUMN "question",
ADD COLUMN     "category" "public"."Category" NOT NULL,
ADD COLUMN     "highlightEnd" INTEGER NOT NULL,
ADD COLUMN     "highlightStart" INTEGER NOT NULL,
ADD COLUMN     "incorrectStatement" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL;
