// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';

import Section from './';

storiesOf('Components / Layout / Section', module)
  .add('section variant', () => (
    <Background.White>
      <Section variant="section">This is some content.</Section>
      <Section variant="section">This is some content.</Section>
      <Section variant="section">This is some content.</Section>
    </Background.White>
  ))
  .add('semi-section variant', () => (
    <Background.White>
      <Section variant="semi-section">This is some content.</Section>
      <Section variant="semi-section">This is some content.</Section>
      <Section variant="semi-section">This is some content.</Section>
    </Background.White>
  ));
