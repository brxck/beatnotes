import React from 'react'
import Beat from '../components/Beat'

function timedata({ playerRef, reviewMode }) {
  return {
    onChange(editor, next) {
      const { value, operations } = editor
      const { blocks } = value

      if (!blocks.last()) return next()

      const blockData = blocks.last().data.toJS()
      const textUpdated = operations.some(
        op => op.type === 'insert_text' || op.type === 'remove_text'
      )
      const blockText = blocks
        .last()
        .getTexts()
        .first().text

      if (blockText === '') {
        // Clear previous time data from newly created blocks
        editor.setBlocks({
          data: { ...blockData, created: null, updated: null },
        })
      } else if (textUpdated) {
        // Set new updated time on text update & created time if unset
        // Don't update time if in review mode
        const currentTime = playerRef.current.getCurrentTime()
        editor.setBlocks({
          data: {
            ...blockData,
            created: blockData.created || currentTime,
            updated: reviewMode ? blockData.updated : currentTime,
          },
        })
      }

      return next()
    },
    renderNode(props, editor, next) {
      // eslint-disable-next-line react/prop-types
      const { node, attributes, children } = props

      if (node.type !== 'paragraph') return next()

      const createdTime = node.data.get('created')
      return (
        <Beat
          attributes={attributes}
          seconds={createdTime}
          playerRef={playerRef}
        >
          {children}
        </Beat>
      )
    },
  }
}

export default timedata
