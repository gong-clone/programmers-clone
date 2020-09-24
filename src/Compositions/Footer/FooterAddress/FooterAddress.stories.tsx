import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { FooterData } from '__fixtures__/Footer'
import { StoryArgsType } from 'Types/footer'
import FooterAddres from '.'

export default {
  title: 'Compositions/Footer/FooterAddres',
  component: FooterAddres,
  argTypes: {
    FooterStoryData: {
      description: 'Footer Header',
      defaultValue: FooterData,
      control: 'object',
    },
  },
} as Meta

export const FooterAddressComposition: Story<StoryArgsType> = ({
  FooterStoryData,
}) => <FooterAddres FooterData={FooterStoryData} />
