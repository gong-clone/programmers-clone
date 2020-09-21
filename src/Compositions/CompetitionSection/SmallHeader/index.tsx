import React, { FC } from 'react'
import styled from 'Application/Theme'
import { H4 } from 'Components/H'
import { OutlinePrimaryButton } from 'Components/Button'
import A from 'Components/A'
import HelpIconSVG from 'Compositions/CompetitionSection/Svg/Help'
import { dummyCompetitionListLength } from '__fixtures__/Competition'
import HeaderContainer from './HeaderContainer'
import Button from '../ListCompetitionSection/SwiperSlide/ItemWrap/button'

const StyledSmallHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const OutlinePrimaryButtonWithLeftMargin = styled(OutlinePrimaryButton)`
  margin-left: 1.5rem;
`

export interface SmallHeaderProps {
  headerTitle: string
  buttonText: string
  index: number
  onChangeHandler: (index: number) => void
}

const DisableButton = styled(Button)`
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
`

const SmallHeader: FC<SmallHeaderProps> = ({
  headerTitle,
  buttonText,
  onChangeHandler,
  index,
}) => {
  const onClickEvent = (action: string, idx: number) => {
    const swiperItem = document.querySelector<HTMLElement>('.swiperItem')
    const nowPage = action === 'next' ? idx + 1 : idx - 1
    onChangeHandler(nowPage)
    if (swiperItem) {
      swiperItem.style.transform = `translate3d(calc(${nowPage * -100}% - ${
        nowPage * 64
      }px), 0px, 0px)`
    }
  }
  return (
    <StyledSmallHeader>
      <HeaderContainer>
        <H4>{headerTitle}</H4>
        <A>
          <HelpIconSVG />
        </A>
        <OutlinePrimaryButtonWithLeftMargin>
          {buttonText}
        </OutlinePrimaryButtonWithLeftMargin>
      </HeaderContainer>
      <HeaderContainer>
        {index === 0 ? (
          <DisableButton>&#60;</DisableButton>
        ) : (
          <Button onClick={() => onClickEvent('prev', index)}>&#60;</Button>
        )}
        {index === dummyCompetitionListLength - 1 ? (
          <DisableButton>&#62;</DisableButton>
        ) : (
          <Button onClick={() => onClickEvent('next', index)}>&#62;</Button>
        )}
      </HeaderContainer>
    </StyledSmallHeader>
  )
}

export default SmallHeader
