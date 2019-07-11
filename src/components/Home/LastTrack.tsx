import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import mixins from '../../utils/mixins'
import { config, media } from '../../globals'

import { Headphones } from 'emotion-icons/fa-solid'

const Wrapper = styled.span`
  color: ${props => props.theme.info};
  font-size: ${config.fontSizes.meta}em;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 50px;
  ${mixins.flexCenter}
  ${media.phablet`display: none;`}
`

const IconHeadphones = styled(Headphones)`
  width: 20px;
  margin-top: -3px;
  margin-right: 8px;
`

const LastTrack = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [lastTrack, setLastTrack] = useState('')
  
  useEffect(() => {
    async function getLastTrack() {
      let response = await fetch(
        'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks' + 
        `&user=${process.env.GATSBY_LASTFM_USER}` + 
        `&api_key=${process.env.GATSBY_LASTFM_API_KEY}` + 
        '&format=json' + 
        '&limit=1'
      )
      let data = await response.json()
      return data
    }
    getLastTrack()
      .then(data => {
        const title = data.recenttracks.track[0].name
        const artist = data.recenttracks.track[0].artist['#text']
        return setLastTrack(`${title} - ${artist}`)
      })
      .catch(error => console.error(error))
    setIsLoading(false)
  }, [])

  return (
    <Wrapper>
      {!isLoading &&
        <>
          <IconHeadphones />
          {lastTrack}
        </>
      }
    </Wrapper>
  )
}

export default LastTrack