import React, { FC, useState } from 'react'
import styled from 'Application/Theme'

import { ImgCompetitionContainer } from 'Compositions/CompetitionSection/Image'
import SwiperContainer from 'Compositions/CompetitionSection/SwiperContainer'
import SwiperWrapperContainer from 'Compositions/CompetitionSection/SwiperWrapper'

import { Competition, CompetitionList } from 'Types/competition'
import { dummyCompetitionListLength } from '__fixtures__/Competition'
import { SwiperSildeContainer } from './SwiperSlide'
import ItemWrap from './SwiperSlide/ItemWrap'
import ItemThumb from './SwiperSlide/ItemWrap/ItemThumb'
import ItemInfo from './SwiperSlide/ItemWrap/ItemInfo'
import ItemBadgeState from './SwiperSlide/ItemWrap/ItemBadgeState'
import ItemBadgeLabel from './SwiperSlide/ItemWrap/ItemBadgeState/ItemBadgeLabel'

const StyledSwiperContainer = styled(SwiperContainer)`
  display: static;
  padding: 0.5rem 0 0 0.5rem;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently*/
`

const IngState = styled(ItemBadgeLabel)`
  border-bottom: 2.5rem solid ${(props) => props.theme.color.darkGray};
`

const EndState = styled(ItemBadgeLabel)`
  border-bottom: 2.5rem solid ${(props) => props.theme.color.whiteGray};
`

export interface CompetitionListProps {
  index: number
  onChangeHandler: (index: number) => void
  competitionList: CompetitionList
}

const ListCompetitionSection: FC<CompetitionListProps> = ({
  competitionList,
  index,
  onChangeHandler,
}) => {
  const [onDrag, setonDrag] = useState<boolean>(false)
  const [dragStartPX, setDragStartPX] = useState<number>(0)

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setonDrag(true)
    setDragStartPX(e.nativeEvent.clientX)
  }

  const onDragEnd = () => {
    setonDrag(false)
  }

  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onDrag) {
      const swiper = document.querySelector<HTMLDivElement>('.swiper')
      const swiperItem = document.querySelector<HTMLElement>('.swiperItem')

      if (swiper && swiperItem) {
        const movePX = dragStartPX - e.nativeEvent.clientX
        if ((movePX > 0 && movePX > 100) || (movePX < 0 && movePX < -100)) {
          setonDrag(false)
          let nowPage = index
          if (index !== dummyCompetitionListLength - 1 && movePX > 100) {
            nowPage = index + 1
          } else if (index !== 0 && movePX < -100) {
            nowPage = index - 1
          }
          onChangeHandler(nowPage)
          swiperItem.style.transform = `translate3d(calc(${nowPage * -100}% - ${
            nowPage * 64
          }px), 0px, 0px)`
        } else {
          swiperItem.style.transform = `translate3d(calc(${-e.nativeEvent
            .clientX}px), 0px, 0px)`
        }
      }
    }
  }

  return (
    <StyledSwiperContainer
      className="swiper"
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={onDragMove}
    >
      <SwiperWrapperContainer>
        {competitionList.map((competition: Competition) => {
          return (
            <SwiperSildeContainer key={competition.id}>
              <ItemWrap>
                <ItemBadgeState>
                  {competition.challengeState === '진행중' ? (
                    <IngState>{competition.challengeState}</IngState>
                  ) : (
                    <EndState>{competition.challengeState}</EndState>
                  )}
                </ItemBadgeState>
                <ItemThumb>
                  <ImgCompetitionContainer
                    imgPath={competition.thunbnailImage}
                  />
                </ItemThumb>
                <ItemInfo competition={competition} />
              </ItemWrap>
            </SwiperSildeContainer>
          )
        })}
      </SwiperWrapperContainer>
    </StyledSwiperContainer>
  )
}

export default ListCompetitionSection
