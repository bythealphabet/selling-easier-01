import { css } from "@emotion/react"; /** @jsx jsx */

const heading = css`
  margin-bottom: 2em;
  grid-column: 2 / -2;
  grid-row: 1;
`;

const postBox = css`
  grid-column: 1 / -1;
  grid-row: 2;
`;

export default { heading, postBox };
