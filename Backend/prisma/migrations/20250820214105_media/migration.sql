/*
  Warnings:

  - You are about to drop the column `media` on the `Playlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Playlist" DROP COLUMN "media",
ADD COLUMN     "mediaTags" "public"."Category"[];
