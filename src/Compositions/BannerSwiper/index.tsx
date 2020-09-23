import React, { FC, ReactNode, useState } from 'react'
import { BannerPageNationContainer } from 'Compositions/CompetitionSection/SwiperPageNation'
import SwiperWrapperContainer from 'Compositions/CompetitionSection/SwiperWrapper'
import { BannerSwiperSildeContainer } from 'Compositions/CompetitionSection/ListCompetitionSection/SwiperSlide'
import {
  dummyBannerList,
  dummyBannerListLength,
} from '__fixtures__/BannerSwiper'
import { StyledSwiperContainer } from 'Compositions/CompetitionSection/ListCompetitionSection'
import BannerWrap from './BannerWrap'
import BannerLeftInfo from './BannerWrap/BannerLeftInfo'
import BannerRightInfo from './BannerWrap/BannerRightInfo'
import PrevButton from './BannerWrap/PrevButton'
import NextButton from './BannerWrap/NextButton'

// 화면기획서 6-1번
export interface Banners {
  id: string // Banners id
  label: string // 36. 배너 라벨
  headline: ReactNode // 37. 배너 헤드라인
  period: {
    // 38. 배너 설명
    up: string
    down: string
  }
  image: string // 39. 배너 이미지
}
export type BannerList = Banners[]

const BannerSwiper: FC = () => {
  const [index, setIndex] = useState<number>(0)
  const onChangeHandler = (idx: number) => {
    setIndex(idx)
  }

  const onButtonCLick = (idx: number) => {
    let now = idx
    window.console.log(now, dummyBannerListLength)
    if (now === -1) {
      now = dummyBannerListLength - 1
      setIndex(dummyBannerListLength - 1)
    } else if (now === dummyBannerListLength) {
      now = 0
      setIndex(0)
    } else {
      setIndex(now)
    }

    const swiperItem = document.querySelector<HTMLElement>('.swiperItem')
    if (swiperItem) {
      swiperItem.style.transform = `translate3d(calc(${now * -100}% - ${
        now * 32
      }px), 0px, 0px)`
    }
  }
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
        if ((movePX > 0 && movePX > 50) || (movePX < 0 && movePX < -50)) {
          setonDrag(false)
          let nowPage = index
          if (movePX > 50) {
            nowPage = index + 1
            if (nowPage === dummyBannerListLength) {
              nowPage = 0
            }
          } else if (movePX < -50) {
            nowPage = index - 1
            if (nowPage === -1) {
              nowPage = dummyBannerListLength - 1
            }
          }
          setIndex(nowPage)
          swiperItem.style.transform = `translate3d(calc(${nowPage * -100}% - ${
            nowPage * 32
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
        {dummyBannerList.map((banner: Banners, i: number) => (
          <BannerSwiperSildeContainer key={banner.id}>
            <BannerWrap>
              <BannerLeftInfo banner={banner} />
              <BannerRightInfo image={banner.image} />
              <PrevButton onClick={() => onButtonCLick(i - 1)}>
                &#60;
              </PrevButton>
              <NextButton onClick={() => onButtonCLick(i + 1)}>
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
