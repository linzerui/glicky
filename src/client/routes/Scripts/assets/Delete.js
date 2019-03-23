// @flow
import React from 'react';

type Props = {
  fill?: string
};

const Delete = ({ fill = 'currentColor' }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      fill={fill}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default Delete;
