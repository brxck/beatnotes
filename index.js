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
        max-height: 100vh;
        justify-content: center;
        overflow: hidden;
        & > div {
          max-width: 700;
          margin: 2rem 1rem;
          width: 45%;
        }

        @media (max-width: 1000px) {
          align-items: center;
          flex-direction: column;
          justify-content: initial;
          & > div {
            margin: 0;
            margin-bottom: 1rem;
            width: 100%;
          }
        }
      `}
    >
      <div>
        <Header />
        <Player playerRef={playerRef} />
      </div>

      <div
        css={css`
          padding-right: 1rem;
          overflow-x: hidden;
          overflow-y: scroll;
        `}
      >
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
