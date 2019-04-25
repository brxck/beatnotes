import React from 'react'

import { formatSeconds } from './helpers'

function timestamp({ playerRef }) {
  return {
    onKeyDown(event, editor, next) {
      // Disallow editing timestamps
      if (editor.value.inlines.some(inline => inline.type === 'timestamp')) {
        event.preventDefault()
        editor.moveToEndOfInline()
        next()
      }

      // Insert timestamps
      if (event.key === '&') {
        event.preventDefault()

        const currentTime = playerRef.current.getCurrentTime()

        editor
          .insertInline({
            type: 'timestamp',
            data: {
              start: currentTime,
            },
          })
          .insertText(formatSeconds(currentTime))
      }
    },
    renderNode(props, editor, next) {
      const { node, attributes, children } = props

      switch (node.type) {
        case 'timestamp':
          return (
            <a
              href=""
              {...attributes}
              onClick={e => {
                e.preventDefault()
                const startTime = node.data.get('start')
                playerRef.current.seekTo(startTime)
              }}
            >
              {children}
            </a>
          )
        default:
          return next()
      }
    },
  }
}

export default timestamp
