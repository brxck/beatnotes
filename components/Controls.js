import React, { useContext, useState } from 'react'
import { css } from '@emotion/core'
import { GlobalContext } from './GlobalState'

export default function Controls() {
  const { globalState, setGlobalState } = useContext(GlobalContext)
  const [urlInput, setUrlInput] = useState(globalState.url)
  const [inputVisible, setInputVisible] = useState(false)

  function handleToggle(e) {
    const { name } = e.currentTarget
    setGlobalState(previous => ({ ...previous, [name]: !previous[name] }))
  }

  function handleUrlToggle() {
    setInputVisible(previous => !previous)
    setGlobalState(previous => ({ ...previous, url: urlInput }))
  }

  return (
    <div>
      <input
        type="text"
        value={urlInput}
        onChange={e => setUrlInput(e.currentTarget.value)}
        hidden={!inputVisible}
      />
      <button name="url" title="Change content" onClick={handleUrlToggle}>
        <span role="img" aria-label="content url">
          🔗
        </span>
      </button>
      <button
        name="reviewMode"
        title="Toggle review mode"
        onClick={handleToggle}
      >
        <span role="img" aria-label="review mode">
          {globalState.reviewMode ? '⌛' : '⏳'}
        </span>
      </button>
      <button name="darkMode" title="Toggle dark mode" onClick={handleToggle}>
        <span role="img" aria-label="dark mode">
          {globalState.darkMode ? '☀️' : '🌙'}
        </span>
      </button>
      <button name="user">
        <span role="img" aria-label="user">
          👨
        </span>
      </button>
    </div>
  )
}
