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
        challengeState: '진행중', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fweb_backend-prgm-img-banner.png?alt=media&token=f63e83bd-533d-4478-a711-95ee82da3509', // 16. 챌린지 이미지
        title: '2020 Dev-Matching: 웹 백엔드 개발자(하반기)', // 17. 타이틀
        period: ['접수 : 20년 09월 14일 11:00 - 10월 08일 18:00', '대회 : 20년 10월 10일 14:00 - 10월 10일 16:00'], // 18. 기간
        languages: ['C++', 'Go', 'Java', 'JS', 'Kotlin', 'Python3', 'Ruby', 'MySQL', 'ToolTip'] // 19. 언어 목록
    },
    {
        id: '3',
        challengeState: '종료', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fml_mras-prgm-img_banner-1.png?alt=media&token=34f02d91-015f-4787-a919-d4c5ca1dcb7a', // 16. 챌린지 이미지
        title: '2020 금융 빅데이터 페스티벌', // 17. 타이틀
        period: ['접수 : 20년 08월 03일 11:00 - 10월 04일 23:59', '대회 : 20년 08월 28일 09:00 - 10월 04일 23:59'], // 18. 기간
        languages: [] // 19. 언어 목록
    },
    {
        id: '4',
        challengeState: '진행중', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fchallenge_naver-prgm-img_banner.png?alt=media&token=37e22419-a474-46b6-b849-e904cfabf4b5', // 16. 챌린지 이미지
        title: 'Naver Apollo CIC 경력 개발자 채용 - 프론트엔드 개발 챌린지', // 17. 타이틀
        period: ['접수 : 20년 08월 31일 11:00 - 09월 18일 17:00', '대회 : 20년 09월 20일 13:00 - 09월 27일 17:00'], // 18. 기간
        languages: ['JS'] // 19. 언어 목록
    },
    {
        id: '5',
        challengeState: '종료', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fbanner-large.png?alt=media&token=74e75b1c-2df8-4b83-af66-ed385e657bce', // 16. 챌린지 이미지
        title: '2020 현대오토에버 블라인드 코딩 챌린지', // 17. 타이틀
        period: ['접수 : 20년 09월 10일 08:00 - 09월 17일 08:00', '대회 : 20년 09월 26일 13:00 - 09월 26일 16:00'], // 18. 기간
        languages: ['C++', 'C#', 'Go', 'Java', 'JS', 'Kotlin', 'Python3', 'ToolTip'] // 19. 언어 목록
    },
    {
        id: '6',
        challengeState: '종료', // 15. 챌린지 상태
        thunbnailImage: 'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Flist-competiton-section%2Fbanner-large.png?alt=media&token=74e75b1c-2df8-4b83-af66-ed385e657bce', // 16. 챌린지 이미지
        title: '2020 현대오토에버 블라인드 코딩 챌린지', // 17. 타이틀
        period: ['접수 : 20년 09월 10일 08:00 - 09월 17일 08:00', '대회 : 20년 09월 26일 13:00 - 09월 26일 16:00'], // 18. 기간
        languages: ['C++', 'C#', 'Go', 'Java', 'JS', 'Kotlin', 'Python3', 'ToolTip'] // 19. 언어 목록
    }
]

export const dummyCompetitionListLength = dummyCompetitionList !== undefined ? Math.round((dummyCompetitionList.length) / 2) : 0;