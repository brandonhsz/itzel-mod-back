-- CreateTable
CREATE TABLE "Cuestionario" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "question1" BOOLEAN NOT NULL,
    "question2" BOOLEAN NOT NULL,
    "question3" BOOLEAN NOT NULL,
    "question4" BOOLEAN NOT NULL,
    "question5" BOOLEAN NOT NULL,

    CONSTRAINT "Cuestionario_pkey" PRIMARY KEY ("id")
);
