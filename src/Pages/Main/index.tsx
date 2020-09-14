import React, { FC } from 'react'
// import Layout from 'Components/Layout'
import { PeriodUl, ListFeatureUl } from 'Components/Ul'
import { PeriodLl, TabItem } from 'Components/Li'

const Main: FC = () => (
  <>
    {/* <Layout>Hello, Programmers-clone!</Layout> */}
    <PeriodUl>
      <PeriodLl>접수 : 20년 08월 27일 14:00 - 11월 05일 18:00</PeriodLl>
      <PeriodLl>대회 : 20년 09월 10일 19:30 - 11월 05일 22:30</PeriodLl>
    </PeriodUl>

    {/*
            기존 코드에는 TabItem아래에 h4와 p태그가 자식컴포넌트로 존재합니다.
            현재는 테스트를 하기위해 제목text만 넣어놨습니다.
        */}
    <ListFeatureUl>
      <TabItem>코드에 집중하는 채용 프로그램</TabItem>
      <TabItem>실전을 위한 트레이닝 시스템</TabItem>
      <TabItem>코드리뷰 중심의 교육과정</TabItem>
    </ListFeatureUl>
  </>
)

export default Main
