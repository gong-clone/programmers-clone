import React, { FC, useState } from 'react'
import { BannerPageNationContainer } from 'Compositions/CompetitionSection/SwiperPageNation'
import SwiperWrapperContainer from 'Compositions/CompetitionSection/SwiperWrapper'
import { BannerSwiperSildeContainer } from 'Compositions/CompetitionSection/ListCompetitionSection/SwiperSlide'
import {
  dummyBannerList,
  dummyBannerListLength,
} from '__fixtures__/BannerSwiper'
import { StyledSwiperContainer } from 'Compositions/CompetitionSection/ListCompetitionSection'
import { Banners } from 'Types/bannerSwiper'
import BannerWrap from './BannerWrap'
import BannerLeftInfo from './BannerWrap/BannerLeftInfo'
import BannerRightInfo from './BannerWrap/BannerRightInfo'
import PrevButton from './BannerWrap/PrevButton'
import NextButton from './BannerWrap/NextButton'

const BannerSwiper: FC = () => {
  const [index, setIndex] = useState<number>(0) // 현재페이지
  const [onDrag, setonDrag] = useState<boolean>(false) // 현재 드래그 상태 유무
  const [dragStartPX, setDragStartPX] = useState<number>(0) // 드래그한 px

  const onChangeHandler = (idx: number) => {
    setIndex(idx)
  }

  const setTransform = (nowPage: number) => {
    const swiperItem = document.querySelector<HTMLElement>('.bannerSwiperItem')
    if (swiperItem) {
      swiperItem.style.transform = `translate3d(calc(${nowPage * -100}% - ${
        nowPage * 32
      }px), 0px, 0px)`
    }
  }

  const onButtonClick = (idx: number) => {
    let nowPage = idx
    if (nowPage === -1) {
      // 첫번재 아이템에서 이전버튼을 누르면 마지막 아이템으로 이동
      nowPage = dummyBannerListLength - 1
      setIndex(dummyBannerListLength - 1)
    } else if (nowPage === dummyBannerListLength) {
      // 마지막 아이템에서 다음버튼을 누르면 첫번째 아이템으로 이동
      nowPage = 0
      setIndex(0)
    } else {
      setIndex(nowPage)
    }
    setTransform(nowPage)
  }

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setonDrag(true)
    setDragStartPX(e.nativeEvent.clientX)
  }

  let nowPX = 0
  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onDrag) {
      const swiperItem = document.querySelector<HTMLElement>(
        '.bannerSwiperItem'
      )
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
        nowPage = dummyBannerListLength - 1
      }
      setTransform(nowPage)
      setIndex(nowPage)
    }

    // 오른쪽으로 넘길경우
    if (nowPX > 0 && nowPX >= 30) {
      // 마지막 아이템에서 첫번째 아이템으로 이동
      let nowPage = index + 1
      if (nowPage === dummyBannerListLength) {
        nowPage = 0
      }
      setTransform(nowPage)
      setIndex(nowPage)
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
        {dummyBannerList.map((banner: Banners, i: number) => (
          <BannerSwiperSildeContainer key={banner.id}>
            <BannerWrap>
              <BannerLeftInfo banner={banner} />
              <BannerRightInfo image={banner.image} />
              <PrevButton onClick={() => onButtonClick(i - 1)}>
                &#60;
              </PrevButton>
              <NextButton onClick={() => onButtonClick(i + 1)}>
                &#62;
              </NextButton>
            </BannerWrap>
            <BannerPageNationContainer
              index={index}
              onChangeHandler={onChangeHandler}
            />
          </BannerSwiperSildeContainer>
        ))}
      </SwiperWrapperContainer>
    </StyledSwiperContainer>
  )
}

export default BannerSwiper
