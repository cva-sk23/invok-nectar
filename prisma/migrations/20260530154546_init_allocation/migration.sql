-- CreateTable
CREATE TABLE "Allocation" (
    "id" TEXT NOT NULL,
    "lender" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "mobileNumber" TEXT,
    "alternateNumber" TEXT,
    "city" TEXT,
    "state" TEXT,
    "dpd" INTEGER,
    "allocatedMonth" TEXT,
    "executiveName" TEXT,
    "teamLeader" TEXT,
    "floorManager" TEXT,
    "retainedCase" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Allocation_pkey" PRIMARY KEY ("id")
);
