import React from 'react'
import { formatSeconds } from '../components/helpers'

function timedata({ playerRef }) {
  return {
    onChange(editor, next) {
      const { value, operations } = editor
      const { blocks } = value

      let nodesCreated = false
      let textUpdated = false
      operations.forEach(op => {
        switch (op.type) {
          case 'insert_text':
          case 'remove_text':
            textUpdated = true
            break
          case 'split_node':
            nodesCreated = true
            break
        }
      })

      if (!nodesCreated && !textUpdated) return next()

      const currentTime = playerRef.current.getCurrentTime()
      const blockData = blocks.last().data.toJS()
      const newBlockText = blocks
        .last()
        .getTexts()
        .first().text

      // Update block's created timestamp if a new, empty block was created
      if (nodesCreated && newBlockText !== '') {
        editor.setBlocks({
          data: { ...blockData, created: currentTime },
        })
      }

      // Update block's updated timestamp if text within was changed
      if (textUpdated) {
        editor.setBlocks({
          data: { ...blockData, updated: currentTime },
        })
      }

      return next()
    },
    renderNode(props, editor, next) {
      // eslint-disable-next-line react/prop-types
      const { node, attributes, children } = props

      // return next()

      if (node.type !== 'paragraph') return next()

      const createdTime = node.data.get('created')
      return (
        <div style={{ position: 'relative' }} {...attributes}>
          <span
            contentEditable={false}
            style={{
              position: 'absolute',
              right: '100%',
              marginRight: '0.2rem',
            }}
            onClick={() => playerRef.current.seekTo(createdTime)}
          >
            <a href="">{formatSeconds(createdTime)}</a>
          </span>
          <span>{children}</span>
        </div>
      )
    },
  }
}

export default timedata
