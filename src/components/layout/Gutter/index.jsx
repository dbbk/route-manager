// @flow

import * as React from 'react';
import { StyledGutter } from './styles';

type Props = {|
  children: React.Node,
|};

export default function Gutter(props: Props) {
  return <StyledGutter {...props} />;
}