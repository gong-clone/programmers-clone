import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import ListCompany, { ListCompanyProps } from '.'
import listCompany from './__fixtures__/listCompany'

export default {
  title: 'Compositions/ListCompany',
  component: ListCompany,
  argTypes: {
    logoList: {
      description: '로고 리스트',
      type: {
        required: true,
      },
      defaultValue: listCompany,
      control: 'object',
    },
  },
} as Meta

type StoryArgsType = ListCompanyProps

export const ListCompanyComponent: Story<StoryArgsType> = ({ logoList }) => (
  <ListCompany logoList={logoList} />
)
