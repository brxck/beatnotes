import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { GlobalContext } from './GlobalState'

function Player({ playerRef }) {
  const { globalState } = useContext(GlobalContext)
  const { url } = globalState
  return (
    <>
      <ReactPlayer url={url} ref={playerRef} controls width="100%" />

      <div
        css={css`
          color: #555;
          font-size: 0.8rem;
        `}
      >
        <p>
          Supports YouTube, Vimeo, Facebook, SoundCloud, Dailymotion, & Twitch.
        </p>
        <p>
          Press <i>shift + enter</i> to add a newline to the same time range.
        </p>
        <p>
          Type <i>%t</i> to insert a timestamp.
        </p>
      </div>
    </>
  )
}

Player.propTypes = {
  playerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Player
