"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equity_1 = __importDefault(require("./lib/equity"));
const accounts_1 = __importDefault(require("./lib/accounts"));
const portfolio_1 = __importDefault(require("./lib/portfolio"));
const history_1 = __importDefault(require("./lib/history"));
const API_URL = "https://live.trading212.com/api/v0";
class Trading212 {
    constructor() {
        this.api_key = undefined;
    }
    init(api_key) {
        this.api_key = api_key;
        console.log("Trading212 API initialized", this.api_key);
        const equity = new equity_1.default(API_URL, this.api_key);
        const accountData = new accounts_1.default(API_URL, this.api_key);
        const portfolio = new portfolio_1.default(API_URL, this.api_key);
        const history = new history_1.default(API_URL, this.api_key);
        return {
            equity,
            accountData,
            portfolio,
            history,
        };
    }
}
exports.default = Trading212;
