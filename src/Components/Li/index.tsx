import React, { FC } from 'react'
import styled from 'Application/Theme'

const Li = styled.li`
  padding-top: 0.25rem;
  font-size: inherit;
  color: inherit;
`

const TabStyledItem = styled(Li)`
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
`

// 채용프로그램의 리스트
const PeriodLl: FC = (props) => {
  const { children } = props
  return <Li>{children}</Li>
}

// our-feature의 리스트
const TabItem: FC = (props) => {
  const { children } = props
  return <TabStyledItem>{children}</TabStyledItem>
}

export { PeriodLl, TabItem }
export default Li
