import React from 'react'
import { Document } from 'slate'
import InstantReplace from 'slate-instant-replace'

import { formatSeconds } from '../components/helpers'

function timestamp({ playerRef }) {
  return [
    // Replace type string with timestamp
    InstantReplace((editor, lastWord) => {
      if (lastWord !== '%t') return

      const currentTime = playerRef.current.getCurrentTime()
      editor.moveFocusBackward(lastWord.length)
      editor.insertFragment(
        Document.create({
          nodes: [
            {
              object: 'block',
              type: 'paragraph',
              nodes: [
                {
                  object: 'inline',
                  type: 'timestamp',
                  data: {
                    start: currentTime,
                  },
                },
                {
                  object: 'text',
                  text: ' ',
                },
              ],
            },
          ],
        })
      )
    }),
    {
      // Render timestamps as links, with onClick handler
      renderNode(props, editor, next) {
        // eslint-disable-next-line react/prop-types
        const { node, attributes, children } = props

        if (node.type !== 'timestamp') return next()
        const startTime = node.data.get('start')

        return (
          <span
            {...attributes}
            style={{ textDecoration: 'underline' }}
            onClick={() => {
              playerRef.current.seekTo(startTime)
            }}
          >
            {formatSeconds(startTime)}
            {children}
          </span>
        )
      },
    },
  ]
}

export default timestamp
