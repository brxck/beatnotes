import React, { useContext, useState } from 'react'
import { css } from '@emotion/core'
import { Context } from './GlobalState'

export default function Controls() {
  const [state, setState] = useContext(Context)
  const [urlInput, setUrlInput] = useState(state.url)
  const [inputVisible, setInputVisible] = useState(false)

  function handleToggle(e) {
    const { name } = e.currentTarget
    setState(previous => ({ ...previous, [name]: !previous[name] }))
  }

  function handleUrlToggle() {
    setInputVisible(previous => !previous)
    setState(previous => ({ ...previous, url: urlInput }))
  }

  return (
    <div>
      <input
        type="text"
        value={urlInput}
        onChange={e => setUrlInput(e.currentTarget.value)}
        hidden={!inputVisible}
      />
      <button name="url" onClick={handleUrlToggle}>
        <span role="img" aria-label="content url">
          🔗
        </span>
      </button>
      <button name="reviewMode" onClick={handleToggle}>
        <span role="img" aria-label="review mode">
          🕑
        </span>
      </button>
      <button name="darkMode" onClick={handleToggle}>
        <span role="img" aria-label="dark mode">
          🌙
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
