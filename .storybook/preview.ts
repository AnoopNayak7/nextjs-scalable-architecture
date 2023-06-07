import type { Preview } from '@storybook/react';
import Image from 'next/image';
import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';

addDecorator(withNextRouter());

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
