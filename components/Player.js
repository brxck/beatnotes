import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

import { Context } from './GlobalState'

function Player({ playerRef }) {
  const [state, setState] = useContext(Context)
  const { url } = state

  return (
    <>
      <ReactPlayer url={url} ref={playerRef} controls width="100%" />

      <div>
        <p>Shift+Enter: soft break</p>
        <p>%t: timestamp</p>
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
