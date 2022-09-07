/*
  Warnings:

  - You are about to drop the column `status_id` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `TodoStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Todo` DROP FOREIGN KEY `Todo_status_id_fkey`;

-- AlterTable
ALTER TABLE `Todo` DROP COLUMN `status_id`,
    ADD COLUMN `status` ENUM('DRAFT', 'DOING', 'PENDING', 'COMPLETED') NOT NULL DEFAULT 'DRAFT',
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- DropTable
DROP TABLE `TodoStatus`;
