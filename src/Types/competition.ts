// 화면기획서 3-1번
export interface Competition {
  id: string // competition id
  challengeState: string // 15. 챌린지 상태
  thunbnailImage: string // 16. 챌린지 이미지
  title: string // 17. 타이틀
  period: string[] // 18. 기간
  languages: string[] // 19. 언어 목록
}

export type CompetitionList = Competition[] // 화면기획서 3번
