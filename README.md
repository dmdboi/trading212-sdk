# Trading212 Typescript SDK

Implements most of the endpoints listed on [Trading212's API Docs](https://t212public-api-docs.redoc.ly/)

Uses Axios under the hood to send requests.

#### usage

```typescript
const { default: tradingApi } = require("../dist/index.js");

const API_KEY = "";
const api = new tradingApi().init(API_KEY);

const getMetadata = async () => {
    const equity = await api.accountData.getAccountMetaData();
    console.log(equity.data, equity.status);
};

getMetadata();
```