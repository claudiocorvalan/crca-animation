import { css } from "lit-element";

export const rotateInDownRight = css` @keyframes rotateInDownRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateInDownRight {
  animation-name: rotateInDownRight;
}
`;