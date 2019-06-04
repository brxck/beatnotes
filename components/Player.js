import React, { useContext, useState } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { GlobalContext } from './GlobalState'

function Player({ playerRef }) {
  const { globalState } = useContext(GlobalContext)
  const { url } = globalState
  const [helpVisible, setHelpVisible] = useState(true)
  return (
    <>
      <ReactPlayer url={url} ref={playerRef} controls width="100%" />

      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setHelpVisible(previous => !previous)}
          css={css`
            background-color: transparent;
            border: none;
            right: 0;
            padding: 0.2rem;
            position: absolute;
            font-size: 0.8rem;
          `}
        >
          <span role="img" aria-label="help">
            {helpVisible ? '✖' : '❓'}
          </span>
        </button>
        <div
          css={css`
            color: #555;
            font-size: 0.8rem;
            visibility: ${helpVisible ? 'visible' : 'hidden'};
          `}
        >
          <p>
            Supports YouTube, Vimeo, Facebook, SoundCloud, Dailymotion, &
            Twitch.
          </p>
          <p>
            Press <i>shift + enter</i> to add a newline to the same time range.
          </p>
          <p>
            Type <i>%t</i> to insert a timestamp.
          </p>
        </div>
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
