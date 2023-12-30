const basePath = "https://cloud.iexapis.com/stable";
const apiKey = "";

/**
 * Searches best stock matches based on a user's query
 * @param {string} query - The user's query, e.g. 'fb'
 * @returns {Promise<Object[]>} Response array of best stock matches
 */
export async function searchSymbol(query) {
  try {
    const url = `https://cloud.iexapis.com/stable/search/${query}?token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Search bar result ------", data);
    return data;
  } catch (err) {
    console.log("An error has occurred:", err);
    throw err;
  }
}

/**
 * Fetches the details of a given company
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchStockDetails = async (stockSymbol) => {
  try {
    const url = `${basePath}/stock/${stockSymbol}/company?token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log("fetch stock details comapny -->>", data);
    return data;
  } catch (err) {
    console.log("An error has occurred:", err);
    throw err;
  }
};

/**
 * Fetches the latest quote of a given stock
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchQuote = async (stockSymbol) => {
  try {
    const url = `${basePath}/stock/${stockSymbol}/quote?token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("An error has occurred:", err);
    throw err;
  }
};

/**
 * Fetches historical data of a stock (to be displayed on a chart)
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @param {string} chartRange - Time range for historical data. Supported values: '1d', '1m', '3m', '6m', '1y', '2y', '5y', 'max'
 * @returns {Promise<Object>} Response object
 */
export const fetchHistoricalData = async (stockSymbol, chartRange) => {
  try {
    const url = `${basePath}/stock/${stockSymbol}/chart/${chartRange}?token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log("An error has occurred:", err);
    throw err;
  }
};
