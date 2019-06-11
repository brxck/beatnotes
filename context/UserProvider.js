import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

function fetchWithToken(url, options) {
  const headers = {
    Authorization: `Bearer ${options.token}`,
    'Content-Type': 'application/json',
  }
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
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
        console.log('!')
      } else {
        console.error(error)
      }
    })
  }

  const value = { login, logout, validate, user, token }

  useEffect(() => {
    if (token) validate()
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UserContext }
