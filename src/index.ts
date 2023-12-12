import EquityAPI from "./lib/equity";
import AccountDataAPI from "./lib/accounts";
import PortfolioAPI from "./lib/portfolio";
import HistoryAPI from "./lib/history";

const API_URL = "https://live.trading212.com/api/v0";

class Trading212 {
  public api_key: string | undefined;

  constructor() {
    this.api_key = undefined;
  }

  init(api_key: string) {
    this.api_key = api_key;

    console.log("Trading212 API initialized", this.api_key);

    const equity = new EquityAPI(API_URL, this.api_key);
    const accountData = new AccountDataAPI(API_URL, this.api_key);
    const portfolio = new PortfolioAPI(API_URL, this.api_key);
    const history = new HistoryAPI(API_URL, this.api_key);

    return {
      equity,
      accountData,
      portfolio,
      history,
    };
  }
}

export default Trading212;
