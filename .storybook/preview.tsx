// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryGetter, StoryContext } from '@storybook/addons'
import React, { ReactNode } from 'react'
import Providers from '../src/Application/Providers'

export const decorators = [
  (Story: StoryGetter, context: StoryContext): ReactNode => {
    return (
      <Providers>
        <Story {...context} />
      </Providers>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
