export type Tag = string
export type TagList = Tag[]
// 화면기획서 4-1번
export interface Job {
  id: string // Job id
  companyImg: string // 24. 회사 로고
  title: string // 25. 직무
  name: string // 26. 회사 이름
  positionTags: TagList // 27. 포지션 목록
}

export type JobListType = Job[]
