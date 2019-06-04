import React from 'react'
import { css } from '@emotion/core'

import Controls from './Controls'

function Header() {
  return (
    <div
      css={css`
        align-items: baseline;
        display: flex;
        justify-content: space-between;
      `}
    >
      <h1
        css={css`
          color: #333;
          font-weight: 300;
        `}
      >
        beatnotes
      </h1>
      <Controls />
    </div>
  )
}

export default Header
