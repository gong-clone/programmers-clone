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
    mildGray: '#f4f4f8',
    whiteGray: '#98A8B9',
    darkGray: '#142029',
    lightGray: '#d7e2eb',
    veryLightGray: '#b2c0cc',
    moreLightGray: '#e9ecf3',
    lightDark: '#44576c',
    sky: '#bbcafb',
    yellow: '#ffeb3b',
    blueGray: '#d7e2eb',
    grayBlue: '#8ca5af',
    orange: '#FF9800',
    black: '#000000',
    mildBlack: '#4f6b81',
    mildGreen: '#4CAF50',
    darkViolet: '#673AB7',
    darkRed: '#F44336',
  },
}

export default styled as CreateStyled<ThemeType>
