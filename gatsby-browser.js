exports.onInitialClientRender = () => {
  const TTCommons = '"TT Commons", San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif'
  
  const yellow = '#FFC700'

  const hashtag = `font-family: ${TTCommons}; font-weight: 500; font-size: 2.1em; color: ${yellow}; margin: 4px 0;`
  const title = `font-family: ${TTCommons}; font-weight: 700; font-size: 2.1em;`
  const body = `font-family: ${TTCommons}; font-weight: 400; font-size: 1.75em;`
  const link = `font-family: ${TTCommons}; font-weight: 400; font-size: 1.5em; border-bottom: 2px solid ${yellow}; padding-top: 6px; line-height: .5;`

  console.log('%c# %cConsole \n%cMy website is open source!  \nCheck the repo here: \n%chttps://git.io/fjlmt \n', hashtag, title, body, link)
}