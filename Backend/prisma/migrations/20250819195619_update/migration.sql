/*
  Warnings:

  - You are about to drop the column `supabaseId` on the `AppUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[supabaseAuthId]` on the table `AppUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `supabaseAuthId` to the `AppUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."AppUser_supabaseId_key";

-- AlterTable
ALTER TABLE "public"."AppUser" DROP COLUMN "supabaseId",
ADD COLUMN     "supabaseAuthId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_supabaseAuthId_key" ON "public"."AppUser"("supabaseAuthId");
