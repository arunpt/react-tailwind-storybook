import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css'

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
  },
};

export default preview;
