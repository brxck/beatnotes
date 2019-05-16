function softBreak() {
  return {
    onKeyDown(event, editor, next) {
      if (event.key !== 'Enter') return next()
      editor.insertText('\n')
    },
  }
}

export default softBreak
