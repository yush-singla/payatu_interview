import React from "react";

const IconExpand = ({ size = 20 }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="black" fill="none" data-darkreader-inline-stroke="">
      <polyline points="15 3 21 3 21 9"></polyline>
      <polyline points="9 21 3 21 3 15"></polyline>
      <line x1="21" y1="3" x2="14" y2="10"></line>
      <line x1="3" y1="21" x2="10" y2="14"></line>
    </svg>
  );
};

export default IconExpand;
