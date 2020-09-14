import React, { FC } from 'react'
import styled from 'Application/Theme'

import { Story } from '@storybook/react/types-6-0'

export interface StyledProps {
  listStyle?: 'none'
}

const Ul = styled.ul<StyledProps>`
  list-style: none;
  list-style: ${(props) => props.listStyle};
  margin: 10px;
  padding: 10px;
`

const PeriodStyledUl = styled(Ul)`
  font-size: 0.875rem;
  color: #5f7f90;
`

// 채용프로그램의 리스트
const PeriodUl: FC = (props) => {
  const { children } = props
  return <PeriodStyledUl>{children}</PeriodStyledUl>
}

// our-feature의 리스트
const ListFeatureUl: Story = ({ children }) => {
  return <Ul>{children}</Ul>
}

export { PeriodUl, ListFeatureUl }
export default Ul
