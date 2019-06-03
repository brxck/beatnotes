import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

const initialState = {
  darkMode: false,
  reviewMode: false,
  url: 'https://www.youtube.com/watch?v=AgpWX18dby4',
}

const GlobalContext = React.createContext(initialState)

export default function GlobalState({ children }) {
  const [state, setState] = useState(initialState)

  return (
    <GlobalContext.Provider
      value={{ globalState: state, setGlobalState: setState }}
    >
      <>
        {children}
        {state.darkMode && (
          <Global
            styles={css`
              html {
                filter: invert(100%);
              }
              img,
              span[role='img'],
              iframe {
                filter: invert(100%);
              }
            `}
          />
        )}
      </>
    </GlobalContext.Provider>
  )
}

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
}

export { GlobalContext }
