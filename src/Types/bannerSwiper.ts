import { HTMLProps, ReactNode } from 'react'

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

export interface BannerListRightInfo {
  imagePath: string
  imageAlt: string
}

export interface BannerListLeftInfo extends HTMLProps<HTMLDivElement> {
  banner: Banners
}
