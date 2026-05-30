-- CreateTable
CREATE TABLE "ContactRecord" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "primaryNumber" TEXT,
    "alternateNumber" TEXT,
    "contactStatus" TEXT,
    "executiveName" TEXT,
    "teamLeader" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactRecord_pkey" PRIMARY KEY ("id")
);
