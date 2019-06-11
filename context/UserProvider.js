import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function fetchApi(path, options) {
  const url = process.env.API
  const defaultOptions = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return fetch(url + path, { ...defaultOptions, ...options })
}

const UserContext = React.createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(email, password) {
    const loginParams = { email, password }
    fetchApi('/login', {
      method: 'POST',
      body: JSON.stringify(loginParams),
    })
      .then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
      .catch(error => console.error(error))
  }

  function logout() {
    fetchApi('/logout', { method: 'DELETE' })
      .then(() => {
        setUser(null)
      })
      .catch(error => console.error(error.message))
  }

  function validate() {
    fetchApi('/validate').catch(error => {
      if (error.status === '401') {
        setUser(null)
      } else {
        console.error(error)
      }
    })
  }

  const value = { login, logout, validate, user }

  useEffect(() => {
    validate()
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UserContext }
