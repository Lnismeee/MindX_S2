import React from "react";

const ItemColor = ({ data, ChangeDk }) => {
  return (
    <div className="filer-item">
      <input
        type="checkbox"
        value={data.name}
        onClick={() => {
          ChangeDk(data.name);
        }}
      />
    </div>
  );
};

export default ItemColor;
