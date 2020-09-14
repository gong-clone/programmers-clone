import styled, { CreateStyled } from '@emotion/styled'
import { ThemeType } from '../Types/theme'

export const theme: ThemeType = {
  color: {
    dark: '#0C151C',
    blue: '#0078ff',
    darkBlue: '#0053f4',
    cyan: '#eeebff',
    lightNavy: '#d8ddff',
    white: '#ffffff',
  },
}

export default styled as CreateStyled<ThemeType>
