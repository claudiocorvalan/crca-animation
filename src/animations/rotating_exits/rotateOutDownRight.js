import { css } from "lit-element";

export const rotateOutDownRight = css` @keyframes rotateOutDownRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  animation-name: rotateOutDownRight;
}
`;
