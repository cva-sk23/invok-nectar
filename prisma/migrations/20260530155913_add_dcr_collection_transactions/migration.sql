-- CreateTable
CREATE TABLE "CollectionTransaction" (
    "id" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "amountCollected" DOUBLE PRECISION NOT NULL,
    "collectionDate" TIMESTAMP(3) NOT NULL,
    "paymentMode" TEXT,
    "referenceNumber" TEXT,
    "executiveName" TEXT,
    "teamLeader" TEXT,
    "floorManager" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionTransaction_pkey" PRIMARY KEY ("id")
);
