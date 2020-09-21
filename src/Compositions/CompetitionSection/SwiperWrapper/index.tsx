import React, { FC } from 'react'
import styled from 'Application/Theme'

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 300ms;
`

const SwiperWrapperContainer: FC = ({
  children,
}: React.HTMLProps<HTMLDivElement>) => (
  <SwiperWrapper className="swiperItem">{children}</SwiperWrapper>
)
export default SwiperWrapperContainer
