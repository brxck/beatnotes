function timedata({ playerRef }) {
  return {
    onChange(editor, next) {
      const textChanged = editor.operations.some(
        op => op.type === 'insert_text' || op.type === 'remove_text'
      )
      if (!textChanged) return next

      editor.setBlocks({
        data: { updated: playerRef.current.getCurrentTime() },
      })
      return next()
    },
  }
}

export default timedata
