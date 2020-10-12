import React, { FC } from 'react'
import styled from 'Application/Theme'

const LogoImg = styled.img`
  width: 182px;
  height: 34px;
  vertical-align: middle;
  border-style: none;
  /* .navbar-application .navbar-brand .bi-logotype */
  display: block;
`
const logoImageSrc =
  'https://firebasestorage.googleapis.com/v0/b/programmers-clone.appspot.com/o/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%2Fnavbar%2Fbrand-nav.png?alt=media&token=c15b73c9-3fa8-4a52-8c74-c3d9f6b6099f'

const Logo: FC = () => <LogoImg alt="logo" src={logoImageSrc} />

export default Logo
