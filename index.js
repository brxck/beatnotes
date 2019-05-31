import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { css } from '@emotion/core'
import 'normalize.css'

import Header from './components/Header'
import Notes from './components/Notes'
import Player from './components/Player'

const App = () => {
  const playerRef = useRef()
  return (
    <div
      css={css`
        display: flex;
        height: 100vh;
        justify-content: center;
        & > div {
          max-width: 700;
          margin: 1rem 4rem;
        }
      `}
    >
      <div>
        <Header />
        <Player playerRef={playerRef} />
      </div>
      <div>
        <Notes playerRef={playerRef} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
