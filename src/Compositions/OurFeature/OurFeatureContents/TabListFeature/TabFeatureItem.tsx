import React, { FC } from 'react'
import styled from 'Application/Theme'
import { css } from '@emotion/core'
import SVGNumber from './SVGNumber'

const TabFetureLiStyle = css`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  /* .our-feature .our-feature-contents .tab-item */
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

const TabFetureLiShow = styled.li`
  ${TabFetureLiStyle}

  background-color: rgba(0, 120, 255, 0.05);
`

const TabFeatureLiHide = styled.li`
  ${TabFetureLiStyle}

  background-color: ${(props) => props.theme.color.white};

  &:hover {
    background-color: ${(props) => props.theme.color.mildGray};
  }
`
const TabFeatureHeader4Style = css`
  font-family: 'Inter', 'NotoSansKR', 'Helvetica Neue', Helvetica, Arial,
    '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif, 'Apple Color Emoji',
    'Noto Color Emoji';
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.009em;
`

const TabFeatureHeader4 = styled.h4`
  ${TabFeatureHeader4Style}
`

const TabFeatureHeader4Active = styled.h4`
  ${TabFeatureHeader4Style}
  color: ${(props) => props.theme.color.blue};
`

const TabFeatureP = styled.p`
  font-family: 'Inter', 'NotoSansKR', 'Helvetica Neue', Helvetica, Arial,
    '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif, 'Apple Color Emoji',
    'Noto Color Emoji';
  font-weight: 400;
  margin-bottom: 8px;
  letter-spacing: -0.1px;
  margin-top: 1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.color.lightDark};
`

interface TabFeatureItemProps {
  onClick: () => void
  isActive: boolean
  feature: {
    number: number
    title: string
    desc: string
  }
}

const TabFeatureItem: FC<TabFeatureItemProps> = ({
  onClick,
  isActive,
  feature,
}) => {
  const tabFeatureLi = isActive ? (
    <TabFetureLiShow onClick={() => onClick()}>
      <TabFeatureHeader4Active>
        <SVGNumber isActive={isActive} number={feature.number} />
        {feature.title}
      </TabFeatureHeader4Active>
      <TabFeatureP>{feature.desc}</TabFeatureP>
    </TabFetureLiShow>
  ) : (
    <TabFeatureLiHide onClick={() => onClick()}>
      <TabFeatureHeader4>
        <SVGNumber isActive={isActive} number={feature.number} />
        {feature.title}
      </TabFeatureHeader4>
      <TabFeatureP>{feature.desc}</TabFeatureP>
    </TabFeatureLiHide>
  )

  return <>{tabFeatureLi}</>
}

export default TabFeatureItem
