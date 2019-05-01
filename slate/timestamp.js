import React from 'react'
import InstantReplace from 'slate-instant-replace'

import { formatSeconds } from '../components/helpers'

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
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: formatSeconds(currentTime),
              },
            ],
          },
        ],
      })
    }),
    {
      // Render timestamps as links, with onClick handler
      renderNode(props, editor, next) {
        // eslint-disable-next-line react/prop-types
        const { node, attributes, children } = props

        if (node.type !== 'timestamp') return next()
        const startTime = node.data.get('start')

        return (
          <span>
            <a
              href=""
              {...attributes}
              onClick={e => {
                e.preventDefault()
                playerRef.current.seekTo(startTime)
              }}
            >
              {formatSeconds(startTime)}
            </a>
          </span>
        )
      },
    },
  ]
}

export default timestamp
