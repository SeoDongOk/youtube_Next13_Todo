import React from "react";
import axios from "axios";

function coinmarketcap_raw() {

  const api_key = process.env.COINMARKETCAP_API_KEY
  ? ""
  : process.env.COINMARKETCAP_API_KEY;
if(api_key === ''){
  throw.console.error("");
}
  return <div>coinmarketcap_raw</div>;
}

export default coinmarketcap_raw;
