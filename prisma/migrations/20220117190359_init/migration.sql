-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "departure" TIMESTAMP(3) NOT NULL,
    "arrival" TIMESTAMP(3) NOT NULL,
    "busType" VARCHAR(45) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "ticketPrice" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(45) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);
