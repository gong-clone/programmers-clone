import styled from 'Application/Theme'
import { css } from '@emotion/core'

const HStyle = css`
  color: inherit;
  letter-spacing: -0.009em;
  margin-top: 0;
  margin-bottom: 0;
  -webkit-font-smoothing: antialiased;
`

const H1 = styled.h1`
  ${HStyle}

  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
`

const H4 = styled.h4`
  ${HStyle}

  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
`

export { H1, H4 }
export default H1
