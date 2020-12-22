import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import svg from "../../assets/images/404.svg";

function NotFoundPage(props) {
  const styles = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <div css={styles}>
      <img src={svg} alt="" />
    </div>
  );
}

export default NotFoundPage;
