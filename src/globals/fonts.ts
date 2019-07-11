import { css } from '@emotion/core'

// TT Commons
import TTCommonsRegularWOFF from '../assets/fonts/ttcommons/ttcommons-regular.woff'
import TTCommonsRegularWOFF2 from '../assets/fonts/ttcommons/ttcommons-regular.woff2'
import TTCommonsMediumWOFF from '../assets/fonts/ttcommons/ttcommons-medium.woff'
import TTCommonsMediumWOFF2 from '../assets/fonts/ttcommons/ttcommons-medium.woff2'
import TTCommonsDemiboldWOFF from '../assets/fonts/ttcommons/ttcommons-demibold.woff'
import TTCommonsDemiboldWOFF2 from '../assets/fonts/ttcommons/ttcommons-demibold.woff2'
import TTCommonsBoldWOFF from '../assets/fonts/ttcommons/ttcommons-bold.woff'
import TTCommonsBoldWOFF2 from '../assets/fonts/ttcommons/ttcommons-bold.woff2'

import SFMonoRegularWOFF from '../assets/fonts/sfmono/sfmono-regular.woff'
import SFMonoRegularWOFF2 from '../assets/fonts/sfmono/sfmono-regular.woff2'

const fonts = css`
  @font-face {
    font-family: 'TT Commons';
    src: url(${TTCommonsRegularWOFF2}) format('woff2'),
    url(${TTCommonsRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'TT Commons';
    src: url(${TTCommonsMediumWOFF2}) format('woff2'),
    url(${TTCommonsMediumWOFF}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'TT Commons';
    src: url(${TTCommonsDemiboldWOFF2}) format('woff2'),
    url(${TTCommonsDemiboldWOFF}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'TT Commons';
    src: url(${TTCommonsBoldWOFF2}) format('woff2'),
    url(${TTCommonsBoldWOFF}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWOFF2}) format('woff2'),
    url(${SFMonoRegularWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export default fonts
