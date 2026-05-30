-- CreateTable
CREATE TABLE "IntelligenceRecord" (
    "id" TEXT NOT NULL,
    "accountNumber" TEXT,
    "customerName" TEXT,
    "intelligenceType" TEXT NOT NULL,
    "source" TEXT,
    "mobileNumber" TEXT,
    "alternateNumber" TEXT,
    "address" TEXT,
    "officeAddress" TEXT,
    "employer" TEXT,
    "uanNumber" TEXT,
    "upiId" TEXT,
    "bankAccount" TEXT,
    "relationshipType" TEXT,
    "relatedPerson" TEXT,
    "remarks" TEXT,
    "collectedBy" TEXT,
    "verifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntelligenceRecord_pkey" PRIMARY KEY ("id")
);
