import { css } from '@emotion/core'
import { ThemeColors } from '../globals/theme'

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
    color: ${`${(theme:ThemeColors) => theme.text}`};
    width: calc(16px + 6 * ((100vw - 320px) / 680));
  `,
}

export default mixins