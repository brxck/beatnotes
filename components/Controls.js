import React, { useContext, useState } from 'react'
import { css } from '@emotion/core'

import { UserContext } from '../context/UserProvider'
import { GlobalContext } from '../context/GlobalStateProvider'

export default function Controls() {
  const { globalState, setGlobalState } = useContext(GlobalContext)
  const { login, logout, user, token } = useContext(UserContext)
  const [urlInput, setUrlInput] = useState(globalState.url)
  const [inputVisible, setInputVisible] = useState(false)

  function handleToggle(e) {
    const { name } = e.currentTarget
    setGlobalState(prev => ({ ...prev, [name]: !prev[name] }))
  }

  function handleUrlToggle() {
    setInputVisible(prev => !prev)
    setGlobalState('url', urlInput)
  }

  return (
    <div
      css={css`
        button {
          background: transparent;
          border: 1px solid #eee;
          border-radius: 4px;
          padding: 0.5rem;
          margin: 0 0.5rem;
          transition: border 0.3s;
          &:hover {
            background: #eee;
            border: 1px solid #ddd;
            cursor: pointer;
          }
        }
      `}
    >
      <input
        type="text"
        value={urlInput}
        onChange={e => setUrlInput(e.currentTarget.value)}
        hidden={!inputVisible}
      />
      <button name="url" title="New note" onClick={handleUrlToggle}>
        <span role="img" aria-label="new note">
          {inputVisible ? '✔' : '➕'}
        </span>
      </button>
      <button
        name="reviewMode"
        title="Toggle review mode"
        className={globalState.reviewMode ? 'active' : ''}
        onClick={handleToggle}
      >
        <span role="img" aria-label="review mode">
          {globalState.reviewMode ? '🔒' : '🔓'}
        </span>
      </button>
      <button name="darkMode" title="Toggle dark mode" onClick={handleToggle}>
        <span role="img" aria-label="dark mode">
          {globalState.darkMode ? '☀️' : '🌙'}
        </span>
      </button>
      <button
        onClick={() => {
          login('brxck@protonmail.com', 'password')
        }}
      >
        <span role="img" aria-label="user">
          {user ? 'true' : 'false'}
        </span>
      </button>
    </div>
  )
}
