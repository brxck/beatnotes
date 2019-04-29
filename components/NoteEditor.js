import React, { useState, useMemo } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import timestamp from './timestamp'
import timedata from './timedata'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 0,
        },
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
  const onChange = change => {
    setValue(change.value)
  }

  const plugins = useMemo(
    () => [timestamp({ playerRef }), timedata({ playerRef })],
    [playerRef]
  )

  return (
    <div>
      <Editor value={value} onChange={onChange} plugins={plugins} />
      <br />
      <pre>{JSON.stringify(value.toJSON(), null, 2)}</pre>
    </div>
  )
}

export default NodeEditor
