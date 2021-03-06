import { css, InterpolationWithTheme } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { ThemeType } from 'Types/theme'

const globalStyle: InterpolationWithTheme<ThemeType> = (theme) => css`
  ${emotionNormalize}

  /* font */
  @import url('https://rsms.me/inter/inter.css');
  @import url(//cdn.jsdelivr.net/font-notosans-kr/1.0.0-v1004/NotoSansKR-2350.css);

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'NotoSansKR', 'Helvetica Neue', Helvetica, Arial,
      '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif, 'Apple Color Emoji',
      'Noto Color Emoji';
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.primary};
    background-color: ${theme.color.white};
    line-height: 1.4;
    width: 100%;
    margin: 0;
    word-break: keep-all;
    overflow-x: hidden;
  }
`

export default globalStyle
