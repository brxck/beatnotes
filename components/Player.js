import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Player = ({ playerRef }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=AgpWX18dby4"
        ref={playerRef}
        controls
      />
    </div>
  )
}

Player.propTypes = {
  playerRef: PropTypes.shape.isRequired({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Player
