-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaible" TEXT NOT NULL,
    "hireCar" TEXT NOT NULL,
    "modelCar" TEXT NOT NULL,
    "colorCar" TEXT NOT NULL,
    "fabCar" TEXT NOT NULL,
    "clientId" INTEGER,
    CONSTRAINT "Cars_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cars" ("avaible", "clientId", "colorCar", "fabCar", "hireCar", "id", "modelCar") SELECT "avaible", "clientId", "colorCar", "fabCar", "hireCar", "id", "modelCar" FROM "Cars";
DROP TABLE "Cars";
ALTER TABLE "new_Cars" RENAME TO "Cars";
CREATE UNIQUE INDEX "Cars_modelCar_key" ON "Cars"("modelCar");
CREATE UNIQUE INDEX "Cars_clientId_key" ON "Cars"("clientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
