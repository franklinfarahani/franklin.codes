import { css } from '@emotion/core'

// tslint:disable: object-literal-sort-keys
const sizes = {
  large: 1440,
  desktop: 1200,
  laptop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
}

// iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(first, ...interpolations)}
      }
    `
    return acc
  },
  {} as {[key in keyof typeof sizes]: typeof css},
)

export default media
