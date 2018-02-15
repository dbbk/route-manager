// @flow
import React from 'react';
import { social as baseSVG } from '../../styled-base-svgs';
import type { SocialSVGProps } from '../../flow-types';

const Twitter = (props: SocialSVGProps) => (
  <svg viewBox="0 0 23 20" {...props}>
    <path d="M22.4.4c-.9.6-1.9 1-3 1.2C18.5.6 17.3 0 16 0c-2.6 0-4.7 2.3-4.7 5 0 .4 0 .8.1 1.2C7.4 6 3.9 4 1.6.9c-.4.8-.6 1.6-.6 2.6 0 1.8.8 3.3 2.1 4.2-.8-.1-1.5-.3-2.2-.7v.1c0 2.4 1.6 4.5 3.8 5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.3 3.5 4.4 3.5-1.6 1.4-3.7 2.2-5.9 2.2-.4 0-.8 0-1.1-.1A13 13 0 0 0 7.2 20c8.7 0 13.4-7.7 13.4-14.4v-.7c.9-.7 1.7-1.6 2.4-2.6-.8.4-1.8.7-2.7.8 1-.6 1.7-1.6 2.1-2.7" />
  </svg>
);

export default baseSVG.withComponent(Twitter);