import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import JobList from '.'

export default {
  title: 'Compositions/JobList',
  component: JobList,
} as Meta

export const JobListComposition: Story = () => <JobList />
