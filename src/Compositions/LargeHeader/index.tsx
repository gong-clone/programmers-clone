import React, { FC, ReactNode } from 'react'
import styled from 'Application/Theme'
import H from 'Components/H'
import { useTheme } from 'emotion-theming'
import { ThemeType } from 'Types/theme'

const LargeHeaderContainer = styled.div``

const SectionDivider = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`

interface DividerCodeProps {
  width: string
  background: string
}

const DividerCode = styled.span<DividerCodeProps>`
  display: inline-block;
  vertical-align: middle;
  height: 0.25rem;
  border-radius: 6.25rem;
  margin: 0 0.25rem;
  width: ${(props) => props.width};
  background: ${(props) => props.background};
`

const MainSentence = styled.h2`
  ${H}

  text-align: center;
  font-size: 32px;
  line-height: 1.6;
  letter-spacing: -0.009em;

  & > span {
    color: ${(props) => props.theme.color.blue};
  }
`

const Description = styled.h4`
  ${H}

  padding-top: 1rem;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.009em;
  color: ${(props) => props.theme.color.mildBlack};
`

export interface LargeHeaderProps {
  mainSentence: ReactNode
  description?: string
}

const LargeHeader: FC<LargeHeaderProps> = ({ mainSentence, description }) => {
  const theme = useTheme<ThemeType>()
  const dividerCodeList: DividerCodeProps[] = [
    { width: '0.5rem', background: theme.color.orange },
    { width: '1rem', background: theme.color.mildGreen },
    { width: '2.5rem', background: theme.color.blue },
    { width: '1rem', background: theme.color.darkViolet },
    { width: '0.5rem', background: theme.color.orange },
    { width: '1rem', background: theme.color.darkRed },
  ]

  return (
    <LargeHeaderContainer>
      <SectionDivider>
        {dividerCodeList.map(({ width, background }, index) => (
          <DividerCode
            width={width}
            background={background}
            key={index.toString()}
          />
        ))}
      </SectionDivider>
      <MainSentence>{mainSentence}</MainSentence>
      {description && <Description>{description}</Description>}
    </LargeHeaderContainer>
  )
}

export default LargeHeader
