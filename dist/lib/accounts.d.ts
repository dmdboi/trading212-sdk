import { AxiosInstance } from "axios";
import { AccountCash, AccountMetaData } from "../types";
declare class Account {
    api_key: string | undefined;
    axios: AxiosInstance;
    constructor(endpoint: string, api_key: string);
    getAccountCash(): Promise<AccountCash | unknown>;
    getAccountMetaData(): Promise<AccountMetaData | unknown>;
}
export default Account;
