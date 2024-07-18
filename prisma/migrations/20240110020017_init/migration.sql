/*
  Warnings:

  - You are about to drop the column `match_id` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `team_id` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Player` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "match_id",
DROP COLUMN "team_id";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "createdAt",
DROP COLUMN "updateAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
