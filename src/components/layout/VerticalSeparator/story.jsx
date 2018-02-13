// @flow

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import VerticalSeparator from './';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.span`
  opacity: 0.5;
`;

storiesOf('Components / Layout / VerticalSeparator', module).add(
  'default',
  () => (
    <Row>
      <VerticalSeparator
        render={StyledComponent =>
          StyledComponent.withComponent(() => <span>Left</span>)
        }
      >
        Hello
      </VerticalSeparator>
      <Right>Right</Right>
    </Row>
  ),
);
