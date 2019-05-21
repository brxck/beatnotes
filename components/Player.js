import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Player = ({ playerRef }) => {
  const urlRef = useRef()
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=AgpWX18dby4')

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactPlayer url={url} ref={playerRef} controls />
      <div>
        <input
          type="text"
          name="url"
          id="url"
          ref={urlRef}
          defaultValue={url}
        />
        <button
          onClick={() => {
            setUrl(urlRef.current.value)
          }}
        >
          go
        </button>
      </div>
    </div>
  )
}

Player.propTypes = {
  playerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Player
