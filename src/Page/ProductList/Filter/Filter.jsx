import React, { useState } from "react";

const Filter = ({ data, setData }) => {
  let dk = new Set();
  data.forEach((e) => {
    dk.add(e.type);
  });
  const [arrdk, setArrdk] = useState([...dk]);
  const [anchor, setAnchor] = useState(false);
  console.log(anchor);

  return (
    <div className="filter">
      <input
        type="checkbox"
        value={anchor}
        onChange={() => {
          setAnchor(!anchor);
        }}
      />
      <label>Anchor</label>
    </div>
  );
};

export default Filter;
