import React from 'react'
import InstantReplace from 'slate-instant-replace'

import { formatSeconds } from './helpers'

function timestamp({ playerRef }) {
  return [
    // Replace type string with timestamp
    InstantReplace((editor, lastWord) => {
      if (lastWord !== '%t') return

      const currentTime = playerRef.current.getCurrentTime()
      editor.moveFocusBackward(lastWord.length)
      editor.insertInline({
        type: 'timestamp',
        data: {
          start: currentTime,
        },
      })
      editor.insertText(formatSeconds(currentTime))
    }),
    {
      // Disallow editing timestamps
      onKeyDown(event, editor, next) {
        const { inlines } = editor.value

        if (inlines.some(inline => inline.type === 'timestamp')) {
          event.preventDefault()
          editor.moveToEndOfInline()
        }

        return next()
      },
      // Render timestamps as functional links
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
    },
  ]
}

export default timestamp
