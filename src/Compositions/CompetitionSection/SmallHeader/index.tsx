import React, { FC } from 'react'
import styled from 'Application/Theme'
import { H4 } from 'Components/H'
import { OutlinePrimaryButton } from 'Components/Button'
import A from 'Components/A'
import HelpIconSVG from 'Compositions/CompetitionSection/Svg/Help'
import TitleContainer from './TitleContainer'

const StyledSmallHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
`

const OutlinePrimaryButtonWithLeftMargin = styled(OutlinePrimaryButton)`
  margin-left: 1.5rem;
`

export interface SmallHeaderProps {
  headerTitle: string
  buttonText: string
}

const SmallHeader: FC<SmallHeaderProps> = ({ headerTitle, buttonText }) => (
  <StyledSmallHeader>
    <TitleContainer>
      <H4>{headerTitle}</H4>
      <A>
        <HelpIconSVG />
      </A>
    </TitleContainer>
    <OutlinePrimaryButtonWithLeftMargin>
      {buttonText}
    </OutlinePrimaryButtonWithLeftMargin>
  </StyledSmallHeader>
)

export default SmallHeader
