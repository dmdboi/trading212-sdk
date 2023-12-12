import axios, { AxiosInstance } from "axios";
import { PortfolioPosition } from "../types";

class Portfolio {
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

  async getPortfolioOpenPositions(): Promise<PortfolioPosition[] | unknown> {
    return await this.axios.get("/equity/portfolio");
  }

  async getPortfolioSpecificPosition(ticker: string): Promise<PortfolioPosition | unknown> {
    return await this.axios.get(`/equity/portfolio/${ticker}`);
  }
}

export default Portfolio;
