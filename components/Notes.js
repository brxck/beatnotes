import React, { useState, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'slate-react'
import MarkHotkeys from 'slate-mark-hotkeys'

import Debug from './Debug'
import { GlobalContext } from '../context/GlobalStateProvider'
import initialValue from '../slate/initialValue'
import schema from '../slate/schema'
import timestamp from '../slate/timestamp'
import timedata from '../slate/timedata'
import softBreak from '../slate/softbreak'

function Notes({ playerRef }) {
  const [value, setValue] = useState(initialValue)
  const onChange = change => {
    setValue(change.value)
  }
  const { globalState } = useContext(GlobalContext)
  const { reviewMode } = globalState

  const plugins = useMemo(
    () => [
      timestamp({ playerRef }),
      timedata({ playerRef, reviewMode }),
      softBreak(),
      MarkHotkeys(),
    ],
    [playerRef]
  )

  return (
    <>
      <Editor
        value={value}
        onChange={onChange}
        plugins={plugins}
        schema={schema}
        style={{
          color: '#222',
          lineHeight: '1.5rem',
          paddingLeft: '4rem',
          paddingBottom: '100%',
        }}
      />
      {/* <Debug value={value} /> */}
    </>
  )
}

Notes.propTypes = {
  playerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
}

export default Notes
