export interface DispositionGroup {
  parent: string;
  description: string;
  children: string[];
}

export interface OperationalRole {
  role: string;
  access: string[];
}

export interface ExecutiveMetric {
  label: string;
  value: string;
}

export interface RecoveryExecutive {
  id: string;
  executiveName: string;
  teamLeader: string;
  floorManager: string;
  location: string;
  activeCases: number;
  ptpCount: number;
  fieldVisits: number;
}

export interface PortfolioAccount {
  accountId: string;
  customerName: string;
  lender: string;
  dpd: number;
  disposition: string;
  ptpStatus: string;
  allocationMonth: string;
  retained: boolean;
}

export interface SettlementRecord {
  settlementId: string;
  customerName: string;
  lender: string;
  settlementAmount: number;
  paidAmount: number;
  balanceAmount: number;
  status: string;
}

export interface FieldVisitRecord {
  visitId: string;
  executive: string;
  customerName: string;
  location: string;
  visitStatus: string;
  ptpCollected: boolean;
}