import React, { useState, useMemo } from 'react'
import { Editor } from 'slate-react'

import initialValue from '../slate/initialValue'
import schema from '../slate/schema'
import timestamp from '../slate/timestamp'
import timedata from '../slate/timedata'

const NodeEditor = ({ playerRef }) => {
  const [value, setValue] = useState(initialValue)
  const onChange = change => {
    setValue(change.value)
  }

  const plugins = useMemo(
    () => [timestamp({ playerRef }), timedata({ playerRef })],
    [playerRef]
  )

  return (
    <div style={{ display: 'flex', marginLeft: '20%' }}>
      <div style={{ flexBasis: '35%', margin: '1rem' }}>
        <Editor
          value={value}
          onChange={onChange}
          plugins={plugins}
          schema={schema}
        />
      </div>
      <div style={{ overflow: 'scroll', height: 500, width: 800 }}>
        <pre>{JSON.stringify(value.toJSON(), null, 2)}</pre>
      </div>
    </div>
  )
}

export default NodeEditor
