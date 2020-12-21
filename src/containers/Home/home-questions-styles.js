import { css } from "@emotion/react"; /** @jsx jsx */

const questionMark = css`
  grid-column: 6 / -2;
  grid-row: 1 / -2;
  align-self: center;
`;

const text = css`
  grid-column: 2 / span 4;
  grid-row: 1 / -2;
  align-self: center;
  color: var(--black);
`;
const btn = css`
  grid-column: 2 / span 4;
  grid-row: 4;
  align-self: start;
  justify-self: start;
  background-color: var(--black);
  color: var(--white);
  font-weight: 900;
  padding: 0.8em 1.8em;
`;
export default { text, questionMark, btn };
