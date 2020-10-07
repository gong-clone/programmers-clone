import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { FooterData } from '__fixtures__/Footer'
import { StoryArgsType } from 'Types/footer'
import FooterHeader from '.'

export default {
  title: 'Compositions/Footer/FooterHeader',
  component: FooterHeader,
  argTypes: {
    footerStoryData: {
      description: 'Footer Header',
      defaultValue: FooterData,
      control: 'object',
    },
  },
} as Meta

export const FooterHeaderComposition: Story<StoryArgsType> = ({
  footerStoryData,
}) => <FooterHeader FooterData={footerStoryData} />
