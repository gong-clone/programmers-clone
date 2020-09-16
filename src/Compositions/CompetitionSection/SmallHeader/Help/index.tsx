import styled from 'Application/Theme'
// 파이어스토어 사용방법을 아직 몰라서 svg를 저장하여 테스트했습니다.
import { ReactComponent as HelpIcon } from './Help.svg'

// svg안에서 width와 height를 직접줘서 출력했습니다.
// 하지만 프로그래머스 홈페이지에는 크기를 선언해주는 부분 없이 뛰우는데,
// 방법을 모르겠습니다.
const Help = styled(HelpIcon)``

export default Help
