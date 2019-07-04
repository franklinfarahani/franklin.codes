import { fonts } from '../globals/config'
import { colors } from '../globals/theme'


const inspect = () => {
  const hashtag = `font-family: ${fonts.TTCommons}; font-weight: 500; font-size: 2.1em; color: ${colors.yellow}; margin: 4px 0;`
  const title = `font-family: ${fonts.TTCommons}; font-weight: 700; font-size: 2.1em;`
  const body = `font-family: ${fonts.TTCommons}; font-weight: 400; font-size: 1.75em;`
  const link = `font-family: ${fonts.TTCommons}; font-weight: 400; font-size: 1.5em; border-bottom: 2px solid ${colors.yellow}; padding-top: 6px; line-height: .5;`

  console.log('%c# %cConsole \n%cMy website is open source!  \nCheck the repo here: \n%chttps://git.io/fjlmt \n', hashtag, title, body, link)
}

export default inspect

