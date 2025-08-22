/*
  Warnings:

  - Added the required column `status` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."PlaylistStatus" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "public"."AppUser" ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "profilePicture" TEXT;

-- AlterTable
ALTER TABLE "public"."Playlist" ADD COLUMN     "status" "public"."PlaylistStatus" NOT NULL;
