import { css } from "lit-element";

export const pulse = css` /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  animation-name: pulse;
}
`;