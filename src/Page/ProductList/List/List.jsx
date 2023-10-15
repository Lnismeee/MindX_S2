import React from "react";
import Card from "../../../Components/Card/Card";

const List = ({ data, setData }) => {
  return (
    <div className="list">
      {data.map((item, index) => {
        return <Card data={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
