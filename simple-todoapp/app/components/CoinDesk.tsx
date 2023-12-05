import React, { useState } from "react";
import coinmarketcap_raw from "../data/coinmarketcap_raw";

interface CoinMarketCap_Price_Array {
  btc: any;
  eth: any;
}

async function CoinDesk() {
  const [priceChange, setPriceChange] = useState<CoinMarketCap_Price_Array[]>(
    []
  );
  const Price_Array = await coinmarketcap_raw();

  console.log(
    "Price_Array",
    Price_Array === undefined ? "" : Price_Array[0].btc
  );
  let btc_price: string;
  let eth_price: string;
  if (Price_Array !== undefined) {
    btc_price = Price_Array[0].btc;
    eth_price = Price_Array[0].eth;
    setTimeout(() => {
      setPriceChange(Price_Array);
    }, 1000);

    return (
      <div className=" m-auto, text-center">
        <h3>BTC/USDT : ${btc_price}</h3>
        <h3>ETH/USDT : ${eth_price}</h3>
      </div>
    );
  }
}

export default CoinDesk;
