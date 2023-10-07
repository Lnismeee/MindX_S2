import React from "react";
import Card from "../../../Components/Card/Card";
import data from "../../../Data/data.json"
const List = () => {
  return (
    <div className="list">
      {data.map((item, index) => {
        return <Card data={item} />;
      })}
    </div>
  );
};

export default List;
