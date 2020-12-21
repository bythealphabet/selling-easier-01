import { css } from "@emotion/react"; /** @jsx jsx */

const ellipse = css`
  display: flex;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

const subsTextBox = css`
  grid-column: 2 / -2;
  grid-row: 2 / span 2;
`;

const subsHeader = css`
  color: var(--black);
  font-size: 1.5rem;
  font-weight: 900;
`;

const actionText = css`
  margin-top: 1em;
  font-weight: 700;
  color: var(--green);
`;

const form = css`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 4;
  grid-row: 3;
  label {
    font-weight: 700;
  }
  input {
    height: 30px;
  }

  button {
    align-self: flex-start;
    font-size: 0.8rem;
    background-color: var(--green);
    color: var(--white);
  }
`;
export default { ellipse, subsHeader, subsTextBox, actionText, form };
