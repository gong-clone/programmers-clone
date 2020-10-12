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
import ItemBadgeLabel from './SwiperSlide/ItemWrap/ItemBadgeState/ItemBadgeLabel'
import ItemBadgeState from './SwiperSlide/ItemWrap/ItemBadgeState'

export const StyledSwiperContainer = styled(SwiperContainer)`
  display: static;
  padding: 0.5rem 0 0 0.5rem;
  max-width: 1200px !important;
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

  const setTransform = (nowPage: number) => {
    const swiperItem = document.querySelector<HTMLElement>('.swiperItem')
    if (swiperItem) {
      swiperItem.style.transform = `translate3d(calc(${nowPage * -100}% - ${
        nowPage * 64
      }px), 0px, 0px)`
    }
  }

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setonDrag(true)
    setDragStartPX(e.nativeEvent.clientX)
  }

  let nowPX = 0
  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onDrag) {
      const swiperItem = document.querySelector<HTMLElement>('.swiperItem')
      if (swiperItem) {
        const movePX = dragStartPX - e.nativeEvent.clientX
        nowPX = movePX
        if (movePX) {
          // 왼쪽으로 이동
          swiperItem.style.transform = `translate3d(${-e.nativeEvent
            .clientX}px, 0px, 0px)`
        } else {
          // 오른쪽으로 이동
          swiperItem.style.transform = `translate3d(${e.nativeEvent.clientX}px, 0px, 0px)`
        }
      }
    }
  }

  const onDragEnd = () => {
    setonDrag(false)
    // 왼쪽으로 넘길경우
    if (nowPX < 0 && nowPX <= -30) {
      // 첫번재 아이템에서 마지막 아이템으로 이동
      let nowPage = index - 1
      if (nowPage === -1) {
        nowPage = dummyCompetitionListLength - 1
      }
      setTransform(nowPage)
      onChangeHandler(nowPage)
    }

    // 오른쪽으로 넘길경우
    if (nowPX > 0 && nowPX >= 30) {
      // 마지막 아이템에서 첫번째 아이템으로 이동
      let nowPage = index + 1
      if (nowPage === dummyCompetitionListLength) {
        nowPage = 0
      }
      setTransform(nowPage)
      onChangeHandler(nowPage)
    }

    // 넘긴 거리가 적을 경우 (이전페이지로 초기화)
    if (
      (nowPX < 0 && nowPX > -30) ||
      (nowPX > 0 && nowPX < 30) ||
      nowPX === 0
    ) {
      setTransform(index)
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
        {competitionList &&
          competitionList.map((competition: Competition) => {
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
