-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "CEP" TEXT,
    "email" TEXT NOT NULL,
    "numberPhone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaible" TEXT NOT NULL,
    "hireCar" TEXT NOT NULL,
    "modelCar" TEXT NOT NULL,
    "colorCar" TEXT NOT NULL,
    "fabCar" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    CONSTRAINT "Cars_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_CPF_key" ON "Client"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Cars_modelCar_key" ON "Cars"("modelCar");
