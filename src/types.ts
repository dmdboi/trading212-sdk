interface EquityOrder {
  creationTime: string;
  filledQuantity: number;
  filledValue: number;
  id: number;
  limitPrice: number;
  quantity: number;
  status: string;
  stopPrice: number;
  strategy: string;
  ticker: string;
  type: string;
  value: number;
}

interface AccountCash {
  blocked: number;
  free: number;
  invested: number;
  pieCash: number;
  ppl: number;
  result: number;
  total: number;
}

interface AccountMetaData {
  currencyCode: string;
  id: number;
}

interface PortfolioPosition {
  averagePrice: number;
  currentPrice: number;
  frontend: string;
  fxPpl: number;
  // iso datestring
  initialFillDate: string;
  maxBuy: number;
  maxSell: number;
  pieQuantity: number;
  ppl: number;
  quantity: number;
  ticker: string;
}

interface QueryParams {
  cursor?: string;
  ticker?: string;
  limit?: number;
}

interface OrderResponse {
  items: Order[];
  nextPagePath: string;
}

interface Order {
  dateCreated: string;
  dateExecuted: string;
  dateModified: string;
  executor: string;
  fillCost: number;
  fillId: number;
  fillPrice: number;
  fillResult: number;
  fillType: string;
  filledQuantity: number;
  filledValue: number;
  id: number;
  limitPrice: number;
  orderedQuantity: number;
  orderedValue: number;
  parentOrder: number;
  status: string;
  stopPrice: number;
  taxes: Tax[];
  ticker: string;
  timeValidity: string;
  type: string;
}

interface Tax {
  fillId: string;
  name: string;
  quantity: number;
  timeCharged: string;
}

interface CSVExport {
  dataIncluded: {
    includeDividends: boolean;
    includeInterest: boolean;
    includeOrders: boolean;
    includeTransactions: boolean;
  };
  downloadLink: string;
  reportId: 0;
  status: string;
  timeFrom: string;
  timeTo: string;
}

export { EquityOrder, AccountCash, AccountMetaData, PortfolioPosition, QueryParams, OrderResponse, Order, Tax, CSVExport };
