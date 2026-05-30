-- CreateTable
CREATE TABLE "SettlementCase" (
    "id" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "settlementAmount" DOUBLE PRECISION NOT NULL,
    "negotiatedAmount" DOUBLE PRECISION,
    "approvalStatus" TEXT,
    "approvalRemarks" TEXT,
    "approvedBy" TEXT,
    "settlementDate" TIMESTAMP(3),
    "executiveName" TEXT,
    "teamLeader" TEXT,
    "floorManager" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SettlementCase_pkey" PRIMARY KEY ("id")
);
