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
  }
}

export default timedata
