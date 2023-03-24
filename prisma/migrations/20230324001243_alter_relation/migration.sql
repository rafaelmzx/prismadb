/*
  Warnings:

  - You are about to drop the column `clientId` on the `Cars` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaible" TEXT NOT NULL,
    "hireCar" TEXT NOT NULL,
    "modelCar" TEXT NOT NULL,
    "colorCar" TEXT NOT NULL,
    "fabCar" TEXT NOT NULL
);
INSERT INTO "new_Cars" ("avaible", "colorCar", "fabCar", "hireCar", "id", "modelCar") SELECT "avaible", "colorCar", "fabCar", "hireCar", "id", "modelCar" FROM "Cars";
DROP TABLE "Cars";
ALTER TABLE "new_Cars" RENAME TO "Cars";
CREATE UNIQUE INDEX "Cars_modelCar_key" ON "Cars"("modelCar");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
