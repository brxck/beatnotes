import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

import { GlobalContext } from './GlobalState'

function Player({ playerRef }) {
  const { globalState } = useContext(GlobalContext)
  const { url } = globalState
  return (
    <>
      <ReactPlayer url={url} ref={playerRef} controls width="100%" />

      <div>
        <p>
          Supports YouTube, Vimeo, Facebook, SoundCloud, Dailymotion, & Twitch
        </p>
        <p>
          Press <i>shift + enter</i> to insert a new line in the same time
          block.
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
