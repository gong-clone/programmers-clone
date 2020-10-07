import React, { FC } from 'react'
import styled from 'Application/Theme'
import { css } from '@emotion/core'

const SVGNumberSpan = styled.span`
  margin-right: 0.25rem;
`

const NumberIconStyle = css`
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  vertical-align: top;
  /* .ic-24 */
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.25rem;
`

const NumberIconActive = styled.svg`
  ${NumberIconStyle}

  fill: ${(props) => props.theme.color.blue};
`

const NumberIcon = styled.svg`
  ${NumberIconStyle}

  fill: ${(props) => props.theme.color.lightDark};
`

const number1 = (
  <svg viewBox="0 0 24 24">
    <title>ic-number-one</title>
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"
      fillRule="nonzero"
    />
  </svg>
)

const number2 = (
  <svg viewBox="0 0 24 24">
    <title>ic-number-three</title>
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2V9H9V7h4a2 2 0 0 1 2 2v2z"
      fillRule="nonzero"
    />
  </svg>
)

const number3 = (
  <svg viewBox="0 0 24 24">
    <title>ic-number-two</title>
    <path
      d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15a2 2 0 0 1-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5z"
      fillRule="nonzero"
    />
  </svg>
)

interface SVGNumberProps {
  number: number
  isActive: boolean
}

const SVGNumber: FC<SVGNumberProps> = ({ number, isActive }) => {
  const NumberIconSVG = isActive ? NumberIconActive : NumberIcon
  let numberIcon
  if (number === 1) {
    numberIcon = number1
  } else if (number === 2) {
    numberIcon = number2
  } else if (number === 3) {
    numberIcon = number3
  }

  return (
    <SVGNumberSpan>
      <NumberIconSVG>{numberIcon}</NumberIconSVG>
    </SVGNumberSpan>
  )
}

export default SVGNumber
