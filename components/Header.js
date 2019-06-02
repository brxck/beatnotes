import React from 'react'
import { css } from '@emotion/core'

import Controls from './Controls'

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
      <Controls />
    </div>
  )
}

export default Header
