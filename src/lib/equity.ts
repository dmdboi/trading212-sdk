import axios, { AxiosInstance } from "axios";
import { EquityOrder } from "../types";

class Equity {
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

  async fetchAllOrders(): Promise<EquityOrder[] | unknown> {
    return await this.axios.get("/equity/orders");
  }

  async fetchOrderByID(id: number): Promise<EquityOrder | unknown> {
    return await this.axios.get(`/equity/orders/${id}`);
  }
}

export default Equity;
