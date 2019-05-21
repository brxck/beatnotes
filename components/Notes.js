import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'slate-react'
import MarkHotkeys from 'slate-mark-hotkeys'

import Debug from './Debug'
import initialValue from '../slate/initialValue'
import schema from '../slate/schema'
import timestamp from '../slate/timestamp'
import timedata from '../slate/timedata'
import softBreak from '../slate/softbreak'

const Notes = ({ playerRef }) => {
  const [value, setValue] = useState(initialValue)
  const onChange = change => {
    setValue(change.value)
  }

  const plugins = useMemo(
    () => [
      timestamp({ playerRef }),
      timedata({ playerRef }),
      softBreak(),
      MarkHotkeys(),
    ],
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
      <Debug value={value} />
    </div>
  )
}

Notes.propTypes = {
  playerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Notes
