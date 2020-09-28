import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import ListCompanyItem, { ListCompanyItemProps } from '.'
import listCompany from '../__fixtures__/listCompany'

export default {
  title: 'Compositions/ListCompany/ListCompanyItem',
  component: ListCompanyItem,
  argTypes: {
    logo: {
      description: '로고 객체(`name`, `imgsrc`)',
      type: {
        required: true,
      },
      defaultValue: listCompany[0],
      control: 'object',
    },
  },
} as Meta

type StoryArgsType = ListCompanyItemProps

export const ListCompanyItemComponent: Story<StoryArgsType> = ({ logo }) => (
  <ListCompanyItem logo={logo} />
)
