import React, { useState, useMemo } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'

import timestamp from './timestamp'
import timedata from './timedata'

const schema = {
  document: {
    nodes: [
      {
        match: { type: 'paragraph' },
      },
    ],
  },
  blocks: {
    paragraph: {
      nodes: [
        {
          match: [{ object: 'text' }, { type: 'timestamp' }],
        },
      ],
    },
  },
  inlines: {
    timestamp: {
      isVoid: true,
    },
  },
}

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
                text: 'This is some text in a paragraph',
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
    <div style={{ display: 'flex', marginLeft: '20%' }}>
      <div style={{ flexBasis: '50%', margin: '1rem' }}>
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
