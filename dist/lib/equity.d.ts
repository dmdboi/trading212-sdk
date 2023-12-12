import { AxiosInstance } from "axios";
import { EquityOrder } from "../types";
declare class Equity {
    api_key: string | undefined;
    axios: AxiosInstance;
    constructor(endpoint: string, api_key: string);
    fetchAllOrders(): Promise<EquityOrder[] | unknown>;
    fetchOrderByID(id: number): Promise<EquityOrder | unknown>;
}
export default Equity;
