import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Ellipse({ position }) {
  return (
    <div css={position}>
      <svg
        width="320"
        height="436"
        viewBox="0 0 320 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          id="Ellipse 3"
          cx="146"
          cy="168"
          rx="240"
          ry="168"
          fill="#B4D2DD"
          fillOpacity="0.7"
        />
      </svg>
    </div>
  );
}

export default Ellipse;
