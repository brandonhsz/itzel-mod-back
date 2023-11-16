/*
  Warnings:

  - A unique constraint covering the columns `[patientId]` on the table `Cuestionario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cuestionario_patientId_key" ON "Cuestionario"("patientId");
