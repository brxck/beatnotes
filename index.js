import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

import NoteEditor from './components/NoteEditor'

const App = () => {
  const playerRef = useRef({})
  return (
    <div>
      <h1>beatnotes</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=AgpWX18dby4"
          ref={playerRef}
          controls
        />
      </div>
      <NoteEditor playerRef={playerRef} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
