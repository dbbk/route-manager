// @flow
import React from 'react';
import { paymentTypes as baseSVG } from '../../styled-base-svgs';
import type { PaymentSVGProps } from '../../flow-types';

const Visa = (props: PaymentSVGProps) => (
  <svg viewBox="0 0 39 26" {...props}>
    <path
      d="M1.8 0h35.4c1 0 1.8.8 1.8 1.9v22.3c0 1-.8 1.9-1.8 1.9H1.8c-1 0-1.8-.8-1.8-1.9V1.9C0 .8.8 0 1.8 0z"
      fill="#f5f6f8"
    />
    <path
      d="M1.8 0h35.4c1 0 1.8.8 1.8 1.9v4.3H0V1.9C0 .8.8 0 1.8 0z"
      fill="#0071ce"
    />
    <path
      d="M0 19.8h39v4.3c0 1-.8 1.9-1.8 1.9H1.8c-1 0-1.8-.8-1.8-1.9v-4.3z"
      fill="#fb9122"
    />
    <path
      d="M15.7 17.2l1.1-7.2h1.8l-1.1 7.2h-1.8zm8.3-7c-.4-.1-.9-.3-1.6-.3-1.8 0-3 1-3 2.4 0 1 .9 1.6 1.6 2 .7.4.9.6.9.9 0 .5-.6.7-1.1.7-.7 0-1.1-.1-1.7-.4l-.2-.1-.3 1.6c.4.2 1.2.4 2 .4 1.9 0 3.1-1 3.1-2.5 0-.8-.5-1.4-1.5-2-.6-.3-1-.6-1-.9 0-.3.3-.6 1-.6.6 0 1 .1 1.3.3l.2.1.3-1.6zm2.4 4.5c.1-.4.7-2 .7-2s.1-.4.2-.7l.1.6s.3 1.7.4 2.1h-1.4zm-14.2-.8l.2 1 1.8-4.9h1.9l-2.8 7.2h-1.9L9.8 11c-.6-.3-1.2-.6-1.9-.8v-.1h2.9c.4 0 .7.2.8.6l.6 3.2zM28.6 10h-1.4c-.4 0-.8.1-.9.6l-2.7 6.6h1.9s.3-.9.4-1.1h2.3c.1.3.2 1.1.2 1.1H30L28.6 10z"
      fill="#0071ce"
    />
  </svg>
);

export default baseSVG.withComponent(Visa);
