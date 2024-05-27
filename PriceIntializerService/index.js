import finnhub from "finnhub";
import { client } from "./db.js";
import { stockList } from "./stockList.js";
client.connect();

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cobjarhr01qomlfe0njgcobjarhr01qomlfe0nk0";
const finnhubClient = new finnhub.DefaultApi();

const createStock = async (name, symbol, price) => {
  const res = await client.query(
    "INSERT INTO StockData (stock_name, stock_symbol, price) VALUES ($1, $2, $3)",
    [name, symbol, price]
  );
};
const updateStock = async (symbol, price) => {
  await client.query(
    "UPDATE StockData SET price = $1 WHERE stock_symbol = $2",
    [price, symbol]
  );
};

  
const FetchStockPrice = async (symbol) => {
  let price = null;
  return new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) {
        reject(error);
      }
      if (data) {
        resolve(data.c);
      }
    });
  });
};

async function checkAndUpdateStock(name, symbol, price) {
  try {
    // Check if stock with symbol exists
    const result = await client.query(
      "SELECT stock_id FROM StockData WHERE stock_symbol = $1",
      [symbol]
    );

    if (result.rows.length > 0) {
      // Stock exists, update its price
      await updateStock(symbol, price);
      console.log(
        `Stock with symbol ${symbol} updated with new price ${price}`
      );
    } else {
      // Stock does not exist, insert new stock data
      await createStock(name,symbol, price);
      console.log(
        `New stock with symbol ${symbol} created with price ${price}`
      );
    }
  } catch (err) {
    console.error("Error occurred:", err);
  }
}

const Job = async () => {
     for (let i = 0; i < stockList.length; i++) {
      const {name,symbol} = stockList[i];
      await new Promise(resolve => setTimeout(resolve, 10000));
      const price = await FetchStockPrice(symbol);
      checkAndUpdateStock(name,symbol,price);
     }
};
Job();
