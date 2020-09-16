import React, { FC } from 'react'
import styled from 'Application/Theme'
import { H4 } from 'Components/H'
import { OutlinePrimaryButton } from 'Components/Button'
import A from 'Components/A'
import TitleContainer from './TitleContainer'
import Help from './Help'

const StyledSmallHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
`

export interface SmallHeaderProps {
  headerTitle: string
  buttonText: string
}

const SmallHeader: FC<SmallHeaderProps> = ({ headerTitle, buttonText }) => (
  <StyledSmallHeader>
    {/* space-between을 활용하기 위헤 Container를 생성하여 감싸주웠습니다. */}
    <TitleContainer>
      <H4>{headerTitle}</H4>
      <A>
        <Help />
      </A>
    </TitleContainer>
    <OutlinePrimaryButton>{buttonText}</OutlinePrimaryButton>
  </StyledSmallHeader>
)

export default SmallHeader
