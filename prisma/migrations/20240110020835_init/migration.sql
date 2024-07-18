/*
  Warnings:

  - Added the required column `game_date` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "game_date" TIMESTAMP(3) NOT NULL;
