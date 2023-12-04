import React from "react";
import coinmarketcap_raw from "../data/coinmarketcap_raw";
async function CoinDesk() {
  const BTC_Price = await coinmarketcap_raw();
  return (
    <div>
      <h3>BTC/USDT : ${BTC_Price}</h3>
    </div>
  );
}

export default CoinDesk;
