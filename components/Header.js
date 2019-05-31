import React from 'react'
import { css } from '@emotion/core'

function Header() {
  return (
    <div
      css={css`
        align-items: baseline;
        justify-content: space-between;
        display: flex;
      `}
    >
      <h1>beatnotes</h1>
      <div>
        <button>theme</button>
        <button>time</button>
        <button>user</button>
      </div>
    </div>
  )
}

export default Header
