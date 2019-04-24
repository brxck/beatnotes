import React, { useState } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

const NodeEditor = ({ playerRef }) => {
  const [value, setValue] = useState(initialValue)
  const onChange = ({ value }) => {
    setValue(value)
  }

  const onKeyDown = (event, editor, next) => {
    if (editor.value.inlines.some(inline => inline.type === 'timestamp')) {
      event.preventDefault()
      editor.moveToEndOfInline()
      next()
    }
    if (event.key !== '&') return next()
    event.preventDefault()

    const currentTime = playerRef.current.getCurrentTime()
    const minutes = new String(Math.floor(currentTime / 60)).padStart(2, '0')
    const seconds = new String(Math.floor(currentTime % 60)).padStart(2, '0')
    editor
      .insertInline({
        type: 'timestamp',
        data: {
          start: currentTime,
        },
      })
      .insertText(`${minutes}:${seconds}`)
  }

  const renderNode = (props, editor, next) => {
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
  }

  return (
    <Editor
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      renderNode={renderNode}
    />
  )
}

export default NodeEditor
