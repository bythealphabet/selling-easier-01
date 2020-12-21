import { css } from "@emotion/react"; /** @jsx jsx */

const substract = css`
  grid-column: 1 / -1;
  grid-row: 1;
`;

const background = css`
  background-color: var(--lightBlue);
  grid-column: 1 / -1;
  grid-row: 3 / -1;
`;
const heading = css`
  color: var(--red);
  font-size: 1.2rem;
  font-weight: 900;
  grid-column: 2 / span 3;
  grid-row: 2;
  align-self: center;
`;

const subHeading = css`
  grid-column: 2 / span 3;
  grid-row: 3;
`;

const testimonials = css`
  grid-column: 1 / -1;
  grid-row: 4;
`;

export default { substract, heading, subHeading, testimonials, background };
