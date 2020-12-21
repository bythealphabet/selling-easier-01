import { css } from "@emotion/react"; /** @jsx jsx */
import hero from "../../assets/images/hero.png";

const heroImg = css`
  background-image: url(${hero});
  background-size: cover;
  background-position: -20% 0;
  background-repeat: no-repeat;
  grid-column: 1 / -1;
  grid-row: 1 / span 4;
`;

const heroHeader = css`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--red);
  line-height: 1.3;

  grid-column: 2 / span 3;
  grid-row: 2;
`;

const actionBtn = css`
  background: var(--pink);
  border: solid 2px var(--pink);
  color: var(--white);
  font-weight: 900;

  grid-column: 2 / span 3;
  grid-row: 3;
  justify-self: start;
  align-self: center;

  :hover,
  :focus {
    background-color: var(--white);
    color: var(--green);
    border: solid 2px var(--green);
  }
`;

export default { heroImg, heroHeader, actionBtn };
