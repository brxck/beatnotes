import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import Notes from './components/Notes'
import Player from './components/Player'

const App = () => {
  const playerRef = useRef()
  return (
    <div>
      <h1>beatnotes</h1>
      <Player playerRef={playerRef} />
      <Notes playerRef={playerRef} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
