import { css } from '@emotion/core'
import { ThemeColors } from '../globals/theme'
import { sizes } from '../globals/media'
import { config } from '../globals'

const { min, max } = config.iconSizes
const { phone, large } = sizes


const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  icon: css`
    width: calc(${min}px + ${max - min} * ((100vw - ${phone}px) / ${large - phone}));
  `,

  button: css`
    font-weight: 900;
    text-transform: uppercase;
    padding: 15px 40px;
    border-radius: 50px;
  `
}

export default mixins