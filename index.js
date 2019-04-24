import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

import NoteEditor from './components/NoteEditor'

const App = () => {
  const playerRef = useRef({})
  return (
    <div style={{ margin: '0 auto', maxWidth: 500 }}>
      <h1>beatnotes</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=MVi17tk3VsIi"
        ref={playerRef}
        controls
      />
      <NoteEditor playerRef={playerRef} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
