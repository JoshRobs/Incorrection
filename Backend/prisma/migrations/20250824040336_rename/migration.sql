/*
  Warnings:

  - The values [TV_SHOW] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `status` on the `Playlist` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Visibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Category_new" AS ENUM ('GAMES', 'ANIME', 'TV_SHOWS', 'MOVIES', 'BOOKS', 'COMICS');
ALTER TABLE "public"."Playlist" ALTER COLUMN "mediaTags" TYPE "public"."Category_new"[] USING ("mediaTags"::text::"public"."Category_new"[]);
ALTER TABLE "public"."Trivia" ALTER COLUMN "category" TYPE "public"."Category_new" USING ("category"::text::"public"."Category_new");
ALTER TYPE "public"."Category" RENAME TO "Category_old";
ALTER TYPE "public"."Category_new" RENAME TO "Category";
DROP TYPE "public"."Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."Playlist" DROP COLUMN "status",
ADD COLUMN     "visibility" "public"."Visibility" NOT NULL DEFAULT 'PUBLIC';

-- AlterTable
ALTER TABLE "public"."Trivia" ADD COLUMN     "visibility" "public"."Visibility" NOT NULL DEFAULT 'PUBLIC';

-- DropEnum
DROP TYPE "public"."PlaylistStatus";
