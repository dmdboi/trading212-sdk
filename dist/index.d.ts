import EquityAPI from "./lib/equity";
import AccountDataAPI from "./lib/accounts";
import PortfolioAPI from "./lib/portfolio";
import HistoryAPI from "./lib/history";
declare class Trading212 {
    api_key: string | undefined;
    constructor();
    init(api_key: string): {
        equity: EquityAPI;
        accountData: AccountDataAPI;
        portfolio: PortfolioAPI;
        history: HistoryAPI;
    };
}
export default Trading212;
