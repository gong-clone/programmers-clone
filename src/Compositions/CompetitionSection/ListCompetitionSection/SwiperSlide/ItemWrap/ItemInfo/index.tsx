import styled from 'Application/Theme'
import React, { FC } from 'react'
import { H4 } from 'Components/H'
import A from 'Components/A'
import Ul from 'Components/Ul'
import Li from 'Components/Li'

import MemoSvgJSIcon from 'Compositions/CompetitionSection/Svg/JS'
import MemoSvgCplusplusIcon from 'Compositions/CompetitionSection/Svg/C++'
import MemoSvgCsharpIcon from 'Compositions/CompetitionSection/Svg/C#'
import MemoSvgJavaIcon from 'Compositions/CompetitionSection/Svg/Java'
import MemoSvgPython3Icon from 'Compositions/CompetitionSection/Svg/Python3'
import MemoSvgKotilnIcon from 'Compositions/CompetitionSection/Svg/Kotiln'
import MemoSvgGoIcon from 'Compositions/CompetitionSection/Svg/Go'
import MemoSvgRubyIcon from 'Compositions/CompetitionSection/Svg/Ruby'
import MemoSvgMySQLIcon from 'Compositions/CompetitionSection/Svg/MySQL'
import { Competition } from 'Types/competition'

const ItemInfo = styled.div`
  display: block;
  padding: 1rem;
`
const ItemInfoTitle = styled(H4)`
  margin-bottom: 0.75rem;
`

const ItemInfoTitleAnchor = styled(A)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.color.primary};
`

const Languages = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 1.875rem;
`

const Period = styled(Ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.gray};
`

const PeriodList = styled(Li)`
  padding-top: 0.25rem;
  font-size: inherit;
  color: inherit;
`

const ToolTip = styled.div`
  display: inline-block;
  align-items: center;
`

export interface CompetitionProps {
  competition: Competition
}

const ItemInfoContainer: FC<CompetitionProps> = ({ competition }) => {
  return (
    <ItemInfo>
      <ItemInfoTitle>
        <ItemInfoTitleAnchor>{competition.title}</ItemInfoTitleAnchor>
      </ItemInfoTitle>
      <Period>
        {competition.period.map((period: string) => (
          <PeriodList key={period}>{period}</PeriodList>
        ))}
      </Period>
      <Languages>
        {competition.languages.map((lenguages: string) => {
          switch (lenguages) {
            case 'C++':
              return <MemoSvgCplusplusIcon key={lenguages} />
            case 'C#':
              return <MemoSvgCsharpIcon key={lenguages} />
            case 'Java':
              return <MemoSvgJavaIcon key={lenguages} />
            case 'Kotlin':
              return <MemoSvgKotilnIcon key={lenguages} />
            case 'Python3':
              return <MemoSvgPython3Icon key={lenguages} />
            case 'JS':
              return <MemoSvgJSIcon key={lenguages} />
            case 'Go':
              return <MemoSvgGoIcon key={lenguages} />
            case 'Ruby':
              return <MemoSvgRubyIcon key={lenguages} />
            case 'MySQL':
              return <MemoSvgMySQLIcon key={lenguages} />
            default:
              return <ToolTip key={lenguages}> + 1 </ToolTip>
          }
        })}
      </Languages>
    </ItemInfo>
  )
}
export default ItemInfoContainer
