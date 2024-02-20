import React from 'react';
import {IconPropsType} from '../../types/components/icons';

function CheckGlyph({selected}: IconPropsType) {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24">
      <path fill="#fff" d="M0 0H24V24H0z"></path>
      {selected && (
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 13.454l1.976 1.887a1 1 0 001.381 0L17 9"></path>
      )}
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"></circle>
    </svg>
  );
}

export default CheckGlyph;
