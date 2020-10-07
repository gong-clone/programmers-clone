import React from "react";
import { BannerList } from "Types/bannerSwiper";

export const dummyBannerList: BannerList = [
    {
        id: "1", // Banners id
        label: "프로그래머스 이벤트", // 36. 배너 라벨
        headline: <>프로그래머스<br />월간 코드 챌린지 시즌1</>, // 37. 배너 헤드라인
        period: {
          // 38. 배너 설명
          up: "대회: 9/10(목), 10/8(목), 11/5(목)",
          down: "11월까지 5문제 풀기 미션 완료하고 선물도 받아 가세요!"
        },
        image: "https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fbanner-swiper%2Fmonthly_code_season1-prgm_html_banner(1).png?alt=media&token=485d5191-c828-4319-adb6-84887b5656ba" // 39. 배너 이미지
    },
    {
        id: "2", // Banners id
        label: "JOIN US!", // 36. 배너 라벨
        headline: <>[프로그래머스]를 만드는<br />그렙의 개발자로 합류하세요!</>, // 37. 배너 헤드라인
        period: {
          // 38. 배너 설명
          up: "• 재택근무 & 탄력 근무제",
          down: "• 웹 풀스택(1 ~ 10년)"
        },
        image: "https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fbanner-swiper%2Frecuit_dev-prgm-img_banner.png?alt=media&token=6fe4f065-7589-4216-a233-9f13e0f344ca" // 39. 배너 이미지
    },
    {
      id: "3", // Banners id
      label: "채용 중인 기업 & 개발자 매칭 프로젝트", // 36. 배너 라벨
      headline: <>Dev-Matching<br />웹 백엔드 개발자</>, // 37. 배너 헤드라인
      period: {
        // 38. 배너 설명
        up: "접수 : 10월 8일(목) 18시까지",
        down: "코딩 테스트 : 10월 10일(토)"
      },
      image: "https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fbanner-swiper%2Fchallenge_naver-prgm-html_banner.png?alt=media&token=5763e68e-89b7-40b0-9628-a4e085c16299" // 39. 배너 이미지
  }

]

export const dummyBannerListLength:number = dummyBannerList.length