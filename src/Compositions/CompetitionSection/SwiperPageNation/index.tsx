import React, { FC } from 'react'
import styled from 'Application/Theme'
import { dummyCompetitionListLength } from '__fixtures__/Competition'
import { dummyBannerListLength } from '__fixtures__/BannerSwiper'
import SwiperPageNationBullet from './SwiperPaginationBullet'

const SwiperPageNation = styled.div`
  position: absolute;
  text-align: center;
  -webkit-transition: opacity 0.3s;
  -o-transition: 0.3s opacity;
  transition: opacity 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  transition-duration: 0.1s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  z-index: 10;
  left: 0;
  width: 100%;
  margin-top: 1.5rem;
`

const BannerPageNation = styled(SwiperPageNation)`
  bottom: 0.5rem;
`

const NowPage = styled(SwiperPageNationBullet)`
  cursor: initial;
  background: ${(props) => props.theme.color.blue};
  width: 3rem;
  opacity: 1;
`

const BannerNowPage = styled(NowPage)`
  background-color: white;
`

const OtherPage = styled(SwiperPageNationBullet)`
  cursor: pointer;
  width: 0.625rem;
  background: #000;
  opacity: 0.2;
`

const BannerOtherPage = styled(OtherPage)`
  background-color: white;
`

export interface SwiperPageNationProps {
  index: number
  onChangeHandler: (index: number) => void
}

const SwiperPageNationContainer: FC<SwiperPageNationProps> = ({
  index,
  onChangeHandler,
}) => {
  const onClickEvent = (idx: number) => {
    const swiperItem = document.querySelector<HTMLElement>('.swiperItem')
    onChangeHandler(idx)
    if (swiperItem) {
      swiperItem.style.transform = `translate3d(calc(${idx * -100}% - ${
        idx * 64
      }px), 0px, 0px)`
    }
  }

  return (
    <SwiperPageNation>
      {[...Array(dummyCompetitionListLength)].map((n, i) =>
        i === index ? (
          <NowPage
            key={String(Date.now() + Number(i)) + n}
            onClick={() => onClickEvent(i)}
          />
        ) : (
          <OtherPage
            key={String(Date.now() + Number(i)) + n}
            onClick={() => onClickEvent(i)}
          />
        )
      )}
    </SwiperPageNation>
  )
}

export const BannerPageNationContainer: FC<SwiperPageNationProps> = ({
  index,
  onChangeHandler,
}) => {
  const onClickEvent = (idx: number) => {
    const bannerSwiperItem = document.querySelector<HTMLElement>(
      '.bannerSwiperItem'
    )
    onChangeHandler(idx)
    if (bannerSwiperItem) {
      bannerSwiperItem.style.transform = `translate3d(calc(${idx * -100}% - ${
        idx * 32
      }px), 0px, 0px)`
    }
  }

  return (
    <BannerPageNation>
      {[...Array(dummyBannerListLength)].map((n, i) =>
        i === index ? (
          <BannerNowPage
            key={String(Date.now() + Number(i)) + n}
            onClick={() => onClickEvent(i)}
          />
        ) : (
          <BannerOtherPage
            key={String(Date.now() + Number(i)) + n}
            onClick={() => onClickEvent(i)}
          />
        )
      )}
    </BannerPageNation>
  )
}

export default SwiperPageNationContainer
