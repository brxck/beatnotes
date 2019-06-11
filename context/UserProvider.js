import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

function fetchWithToken(url, options) {
  const headers = { Authorization: `Bearer ${options.token}` }
  return fetch(url, { headers, ...options })
}

const UserContext = React.createContext()

export default function UserProvider({ children }) {
  const url = process.env.API
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  function resetState() {
    setToken(null)
    setUser(null)
    Cookies.remove('user')
  }

  function login(email, password) {
    fetch(url + '/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setToken(data)
        setUser(email)
        Cookies.set('user', { ...data, email })
      })
      .catch(error => console.error(error))
  }

  function logout() {
    fetchWithToken(url + '/logout', { token, method: 'DELETE' })
      .then(() => {
        resetState()
      })
      .catch(error => console.error(error.message))
  }

  function validate() {
    fetchWithToken(url + '/validate', { token }).catch(error => {
      if (error.status === '401') {
        resetState()
      } else {
        console.error(error)
      }
    })
  }

  const value = { login, logout, validate }

  useEffect(() => {
    validate()
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
