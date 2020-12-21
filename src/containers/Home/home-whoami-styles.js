import { css } from "@emotion/react"; /** @jsx jsx */

const imgStyles = css`
  border-radius: 50%;

  grid-column: 5 / -2;
  grid-row: 1 / span 3;
`;

const nameText = css`
  font-size: 1rem;
  font-style: italic;

  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
  align-self: center;
`;

const bodyText = css`
  grid-column: 2 / -2;
  grid-row: 5;

  span {
    font-weight: 700;
  }
`;

const tail = css`
  grid-column: 2 / -2;
  grid-row: -1;
  span {
    font-weight: 700;
  }
`;

export default { imgStyles, nameText, bodyText, tail };
