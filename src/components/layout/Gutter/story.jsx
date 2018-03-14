// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from 'src/utils/storybook-helpers';
import { getLoremIpsumParagraph } from 'src/utils/storybook-helpers/faker';
import Gutter from './';

storiesOf('Components / Layout / Gutter', module).add('default', () => (
  <div>
    <Background.Documentation>
      <p>Horizontal padding should change according to viewport width.</p>
    </Background.Documentation>
    <Gutter>{getLoremIpsumParagraph()}</Gutter>
  </div>
));
