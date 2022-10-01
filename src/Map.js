import "./App.css";
import React, { useState } from "react";
import Endpoints from "./Endpoints";
import Quote from "./quoteBox/Quote";

const Map = () => {
  const [item, setItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const Effect = () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");

    setIsLoading(true);
    const endpoint = lang ? Endpoints[lang].url : Endpoints.default.url;

    fetch(endpoint, { cache: "no-store" })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const field = lang ? Endpoints[lang].field : Endpoints.default.field;
        const quote = field
          .split(".")
          .reduce((o, p) => (o ? o[p] : ""), result);
        setItem(quote);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="container">
      <div className="data">
        <Quote quote={item} />
      </div>
      <div>
        <button disabled={isLoading} onClick={Effect} className="click">
          {isLoading ? "Loading..." : "Click for a quote !"}
        </button>
      </div>
    </div>
  );
};

export default Map;
