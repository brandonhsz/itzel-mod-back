-- CreateTable
CREATE TABLE "ClinicalHistory" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "diagnostic" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,

    CONSTRAINT "ClinicalHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClinicalHistory" ADD CONSTRAINT "ClinicalHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
