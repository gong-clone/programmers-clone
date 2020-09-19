import styled, { CreateStyled } from '@emotion/styled'
import { ThemeType } from '../Types/theme'

export const theme: ThemeType = {
  color: {
    primary: '#263747',
    dark: '#0C151C',
    blue: '#0078ff',
    darkBlue: '#0053f4',
    cyan: '#eeebff',
    lightNavy: '#d8ddff',
    white: '#ffffff',
    gray: '#5f7f90',
    whiteGray: '#98A8B9',
    darkGray: '#142029',
    lightGray: '#d7e2eb',
    veryLightGray: '#b2c0cc',
  },
}

export default styled as CreateStyled<ThemeType>
