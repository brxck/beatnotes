import React, { useState } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import timestamp from './timestamp'

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

  const plugins = [timestamp({ playerRef })]

  return (
    <div>
      <Editor value={value} onChange={onChange} plugins={plugins} />
      <br />
      <pre>{JSON.stringify(value.toJSON(), null, 2)}</pre>
    </div>
  )
}

export default NodeEditor
