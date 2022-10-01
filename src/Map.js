import "./App.css";
import React, { useState, useEffect } from "react";
import Endpoints from "./Endpoints";
import Quote from "./quoteBox/Quote";

const Map = () => {
  const [item, setItem] = useState("");

  const Effect = () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");

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
      });
  };

  return (
    <div className="container">
      <div className="data">
        <Quote quote={item} />
      </div>
      <div>
        <button onClick={Effect} className="click">
          Click for a quote !
        </button>
      </div>
    </div>
  );
};

export default Map;
