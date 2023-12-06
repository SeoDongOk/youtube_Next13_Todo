import React from "react";
import axios from "axios";
import { Processor } from "postcss";

function coinNews_raw() {
  console.log("test");
  const newsRawData = async () => {
    const apiKey = process.env.NEW_API_KEY;
    console.log("apiKey: ", apiKey);
    const data_1 = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`,
      {
        headers: {
          Accept: "applcation/json",
        },
      }
    );
    console.log(data_1);
  };
  newsRawData();

  return null;
}

export default coinNews_raw;
