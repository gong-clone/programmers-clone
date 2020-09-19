import { CompetitionList } from 'Types/competition'

export const dummyCompetitionList: CompetitionList = [
    {
        id: '1',
        challengeState: '진행중', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fmonthly_code_season1-prgm_img_banner.png?alt=media&token=d495d22f-4c3d-443f-bd1f-19eb2acce46e', // 16. 챌린지 이미지
        title: '프로그래머스 월간 코드 챌린지 시즌1', // 17. 타이틀
        period: ['접수 : 20년 08월 27일 14:00 - 11월 05일 18:00', '대회 : 20년 09월 10일 19:30 - 11월 05일 22:30'], // 18. 기간
        languages: ['C++', 'C#', 'Java', 'Kotlin', 'Python3'] // 19. 언어 목록
    },
    {
        id: '2',
        challengeState: '종료', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fml_mras-prgm-img_banner-1.png?alt=media&token=34f02d91-015f-4787-a919-d4c5ca1dcb7a', // 16. 챌린지 이미지
        title: '2020 금융 빅데이터 페스티벌', // 17. 타이틀
        period: ['접수 : 20년 08월 03일 11:00 - 10월 04일 23:59', '대회 : 20년 08월 28일 09:00 - 10월 04일 23:59'], // 18. 기간
        languages: [] // 19. 언어 목록
    }
]