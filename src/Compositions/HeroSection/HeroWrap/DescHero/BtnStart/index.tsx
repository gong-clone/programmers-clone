import React, { FC } from 'react'
import styled from 'Application/Theme'

const BtnStartAnchor = styled.a`
  text-decoration: none;
  /* .btn */
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border-radius: 0.25rem;
  font-size: 16px;
  letter-spacing: -0.009em;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid transparent;
  padding: 0.4375rem 0.8125rem;
  cursor: pointer;
  /* @media (prefers-reduced-motion: reduce) .btn */
  transition: none;
  /* .btn-primary */
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.blue};
  border-color: ${(props) => props.theme.color.blue};
  /* .hero-section .hero-warp .btn-start */
  min-width: 13.125rem;

  &:hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.darkBlue};
    border-color: ${(props) => props.theme.color.darkBlue};
    text-decoration: none;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    outline: 0;
  }
`

const BtnStartSpan = styled.span`
  /* .btn svg, .btn span */
  display: inline-block;
  vertical-align: middle;
  /* .hero-section .hero-warp .btn-primary span  */
  font-size: 1.125rem;
`

// 하드 코딩
const btnStartHref = '/users/signup'
const btnStartStr = '시작하기'

const BtnStart: FC = () => {
  return (
    <BtnStartAnchor href={btnStartHref}>
      <BtnStartSpan>{btnStartStr}</BtnStartSpan>
    </BtnStartAnchor>
  )
}

export default BtnStart
