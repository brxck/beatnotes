import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Debug({ value }) {
  const [state, setState] = useState(false)

  return (
    <div style={{ overflow: 'scroll', height: 500, width: 800 }}>
      <button onClick={() => setState(current => !current)}>🐞</button>
      <div>
        <pre style={{ display: state ? 'initial' : 'none' }}>
          {JSON.stringify(value.toJSON(), null, 2)}
        </pre>
      </div>
    </div>
  )
}

Debug.propTypes = {
  value: PropTypes.object.isRequired,
}

export default Debug
