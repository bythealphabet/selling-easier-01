import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import girlImg from "../../assets/images/succes-girl-afro.jpg";
import skillImg from "../../assets/images/skill.jpg";
import screamImg from "../../assets/images/scream-to-phone.jpg";

function BlogPosts({ title, text, img }) {
  const styles = css`
    grid-template-rows: 1fr 20px 50px 50px;
    grid-gap: 5px;

    h4 {
      grid-column: 2 / span 3;
      min-height: 70px;
    }

    p {
      grid-column: 2 / -2;
      grid-row: 3 / span 2;

      span {
        color: var(--red);
      }
    }

    .post-img {
      grid-column: 5 / -2;
      grid-row: 1 / span 4;
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  `;
  return (
    <div className="base-grid" css={styles}>
      <h4>{title}</h4>
      <p>
        {text} <span>...read more...</span>
      </p>
      <div className="post-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default BlogPosts;
