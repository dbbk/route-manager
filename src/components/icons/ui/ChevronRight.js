// @flow

import React from 'react';
import styled from 'styled-components';

const ChevronRight = (props: {}) => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path d="M4.8 3.3L10.4 9l-5.6 5.7 1.4 1.4 7-7.1-7-7.1z" />
  </svg>
);

export default styled(ChevronRight)`
  fill: currentColor;
`;
