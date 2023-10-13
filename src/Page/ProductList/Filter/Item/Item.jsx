import React from "react";

const Item = ({ data, ChangeDk }) => {
  return (
    <div className="filer-item">
      <input
        type="checkbox"
        value={data.name}
        onClick={() => {
          ChangeDk(data.name);
        }}
      />
      <label>{data.name}</label>
    </div>
  );
};

export default Item;
