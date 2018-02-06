// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondaryHeading from './';
import { Background } from '../../../utils/storybook-helpers/';

storiesOf('Components / Text / SecondaryHeading', module)
  .add('default', () => (
    <SecondaryHeading element="h2">Secondary Heading</SecondaryHeading>
  ))
  .add('with white color prop', () => (
    <Background.Black>
      <SecondaryHeading element="h2" color="white">
        Secondary Heading
      </SecondaryHeading>
    </Background.Black>
  ))
  .add('with light weight prop', () => (
    <SecondaryHeading element="h2" weight="light">
      Light Secondary Heading
    </SecondaryHeading>
  ));