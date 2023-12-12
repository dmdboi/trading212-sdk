import axios, { AxiosInstance } from "axios";
import { CSVExport, OrderResponse, QueryParams } from "../types";

class History {
  public api_key: string | undefined;
  public axios: AxiosInstance;

  constructor(endpoint: string, api_key: string) {
    this.api_key = api_key;

    this.axios = axios.create({
      baseURL: endpoint,
      headers: {
        Authorization: this.api_key,
      },
    });
  }

  async getHistoricalOrders(data: QueryParams): Promise<OrderResponse | unknown> {
    return await this.axios.get("/equity/history/orders", {
      params: data,
    });
  }

  async getPaidOutDividends(data: QueryParams): Promise<unknown> {
    return await this.axios.get("`/equity/history/dividends`", {
      params: data,
    });
  }

  async getExportsList(): Promise<CSVExport[] | unknown> {
    return await this.axios.get("/history/exports");
  }

  async postExportData(data: CSVExport): Promise<unknown> {
    return await this.axios.post("/history/exports", data);
  }

  async getTransactions(data: QueryParams): Promise<unknown> {
    return await this.axios.get("/history/transactions", {
      params: data,
    });
  }
}

export default History;
