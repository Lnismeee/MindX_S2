import React from "react";
import Header from "./Page/Header/Header";
import Card from "./Components/Card/Card";
import data from "../src/Data/data.json"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card data={data[0]} />
      <Card data={data[1]}/>
    </div>
  );
};

export default App;
