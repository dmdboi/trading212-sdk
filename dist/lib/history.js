"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class History {
    constructor(endpoint, api_key) {
        this.api_key = api_key;
        this.axios = axios_1.default.create({
            baseURL: endpoint,
            headers: {
                Authorization: this.api_key,
            },
        });
    }
    getHistoricalOrders(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.axios.get("/equity/history/orders", {
                params: data,
            });
        });
    }
    getPaidOutDividends(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.axios.get("`/equity/history/dividends`", {
                params: data,
            });
        });
    }
    getExportsList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.axios.get("/history/exports");
        });
    }
    postExportData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.axios.post("/history/exports", data);
        });
    }
    getTransactions(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.axios.get("/history/transactions", {
                params: data,
            });
        });
    }
}
exports.default = History;
