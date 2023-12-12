import { AxiosInstance } from "axios";
import { PortfolioPosition } from "../types";
declare class Portfolio {
    api_key: string | undefined;
    axios: AxiosInstance;
    constructor(endpoint: string, api_key: string);
    getPortfolioOpenPositions(): Promise<PortfolioPosition[] | unknown>;
    getPortfolioSpecificPosition(ticker: string): Promise<PortfolioPosition | unknown>;
}
export default Portfolio;
