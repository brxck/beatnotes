import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

const initialState = {
  darkMode: false,
  reviewMode: false,
  url: 'https://www.youtube.com/watch?v=AgpWX18dby4',
}

const GlobalContext = React.createContext(initialState)

export default function GlobalStateProvider({ children }) {
  const [state, setState] = useState(initialState)

  function setGlobalState(key, value) {
    if (typeof key === 'function') {
      const fn = key
      const newState = fn(state)
      setState(newState)
    } else {
      setState(prev => ({ ...prev, [key]: value }))
    }
  }

  return (
    <GlobalContext.Provider value={{ globalState: state, setGlobalState }}>
      {children}
      {state.darkMode && (
        <Global
          styles={css`
            html {
              filter: invert(100%);
            }
            img,
            iframe {
              filter: invert(100%);
            }
          `}
        />
      )}
    </GlobalContext.Provider>
  )
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { GlobalContext }
