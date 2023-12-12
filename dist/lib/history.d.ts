import { AxiosInstance } from "axios";
import { CSVExport, OrderResponse, QueryParams } from "../types";
declare class History {
    api_key: string | undefined;
    axios: AxiosInstance;
    constructor(endpoint: string, api_key: string);
    getHistoricalOrders(data: QueryParams): Promise<OrderResponse | unknown>;
    getPaidOutDividends(data: QueryParams): Promise<unknown>;
    getExportsList(): Promise<CSVExport[] | unknown>;
    postExportData(data: CSVExport): Promise<unknown>;
    getTransactions(data: QueryParams): Promise<unknown>;
}
export default History;
