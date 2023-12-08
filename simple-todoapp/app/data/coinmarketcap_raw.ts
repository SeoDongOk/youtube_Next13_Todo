import React from "react";
import axios from "axios";

function coinmarketcap_raw() {
  const api_key = process.env.COINMARKETCAP_API_KEY
    ? ""
    : process.env.COINMARKETCAP_API_KEY;
  // check api key exist
  // if (api_key === "") {
  //   throw new Error("Not Api key in CoinMarketCap");
  // }

  //from CoinDesk Web
  const raw_Data = async () => {
    const btc_raw = await axios.get(
      "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=10&category=spot&centerType=all&sort=cmc_rank_advanced&direction=desc&spotUntracked=true"
    );
    const eth_raw = await axios.get(
      "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=ethereum&start=1&limit=10&category=spot&centerType=all&sort=cmc_rank_advanced&direction=desc&spotUntracked=true"
    );

    // check Currency Symbol
    if (
      btc_raw.data.data.marketPairs[1].quoteSymbol &&
      eth_raw.data.data.marketPairs[0].quoteSymbol === "USDT"
    ) {
      return [
        {
          btc: btc_raw.data.data.marketPairs[1].price,
          eth: eth_raw.data.data.marketPairs[0].price,
        },
      ];
    }
  };
  return raw_Data();
}

export default coinmarketcap_raw;
