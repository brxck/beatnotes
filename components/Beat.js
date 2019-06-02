import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { secondsToTimestamp } from '../components/helpers'

function Beat(props) {
  const { seconds, attributes, children, playerRef } = props
  return (
    <div
      {...attributes}
      css={css`
        position: relative;
      `}
    >
      <span
        contentEditable={false}
        css={css`
          margin-right: 0.3rem;
          position: absolute;
          right: 100%;
        `}
        onClick={() => playerRef.current.seekTo(seconds)}
      >
        <button
          css={css`
            background: transparent;
            border: none;
            border-bottom: 1px solid #999;
            color: #555;
            height: 1.5rem;
            padding: 0 0.2rem;
            font-size: 0.9rem;
            margin-right: 0.3rem;
            transition: all 0.2s;
            transition-property: margin, padding;
            &:hover {
              color: #333;
              border-color: #333;
              cursor: pointer;
              margin-right: 0;
              padding-right: 0.5rem;
            }
          `}
        >
          {secondsToTimestamp(seconds)}
        </button>
      </span>
      <span>{children}</span>
    </div>
  )
}

Beat.propTypes = {
  seconds: PropTypes.number.isRequired,
  attributes: PropTypes.object,
  children: PropTypes.node.isRequired,
  playerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Beat
