import { useState, useEffect } from "react";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
    )
      .then((response) => response.json())
      .then((data) => setCryptos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="p-10 text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
        Crypto List
      </h1>
      <div className="p-10 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>24h Change (%)</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          {cryptos.map((crypto) => (
          <tbody key={crypto.id}>
            <tr className="hover">
              <th><img src={crypto.image} height={25} width={25}/></th>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price}</td>
              <td
                className={
                  crypto.price_change_percentage_24h < 0
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${crypto.market_cap.toLocaleString()}</td>
            </tr>
          </tbody>
        ))}
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
