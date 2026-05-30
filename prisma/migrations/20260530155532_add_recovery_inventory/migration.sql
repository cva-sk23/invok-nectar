-- CreateTable
CREATE TABLE "RecoveryCase" (
    "id" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "disposition" TEXT,
    "ptpAmount" DOUBLE PRECISION,
    "ptpDate" TIMESTAMP(3),
    "pdcAmount" DOUBLE PRECISION,
    "pdcDate" TIMESTAMP(3),
    "partPayment" DOUBLE PRECISION,
    "settlementRaised" BOOLEAN NOT NULL DEFAULT false,
    "settlementAmount" DOUBLE PRECISION,
    "executiveName" TEXT,
    "teamLeader" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecoveryCase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecoveryCase_accountNumber_key" ON "RecoveryCase"("accountNumber");
