import axios, { AxiosInstance } from "axios";
import { AccountCash, AccountMetaData } from "../types";

class Account {
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

  async getAccountCash(): Promise<AccountCash | unknown> {
    return await this.axios.get("/equity/account/cash");
  }

  async getAccountMetaData(): Promise<AccountMetaData | unknown> {
    return await this.axios.get("/equity/account/info");
  }
}

export default Account;
