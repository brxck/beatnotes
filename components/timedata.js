function timedata({ playerRef }) {
  return {
    onChange(editor, next) {
      const { value, operations, selection } = editor
      const { blocks } = value

      const newNodeOperations = operations.some(
        op => op.type === 'split_node' || op.type === 'insert_node'
      )
      const textChanged = operations.some(
        op => op.type === 'insert_text' || op.type === 'remove_text'
      )

      if (!textChanged && !newNodeOperations) return next()

      const currentTime = playerRef.current.getCurrentTime()
      const blockData = blocks.last().data.toJS()

      if (newNodeOperations) {
        const newBlocksText = blocks
          .last()
          .getTexts()
          .first().text

        if (newBlocksText === '') {
          editor.setBlocks({
            data: { ...blockData, created: currentTime },
          })
        }
      }
      if (textChanged) {
        editor.setBlocks({
          data: { ...blockData, updated: currentTime },
        })
      }
      return next()
    },
  }
}

export default timedata
