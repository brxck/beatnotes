import { useAsync } from 'react-async'
import { useContext } from 'react'

import { GlobalContext } from '../components/GlobalState'

async function fetchWithToken({ path, options }, { signal }) {
  const url = process.env.API_URL + path
  const headers = { Authorization: `Bearer ${options.token}` }

  const res = await fetch(url, { headers, ...options, ...signal })

  if (!res.ok) throw new Error(res)
  return res.json()
}

function useApi(path, options = {}) {
  const { globalState } = useContext(GlobalContext)
  const token = globalState && globalState.token

  return useAsync({
    [options.defer ? 'deferFn' : 'promiseFn']: fetchWithToken,
    path,
    options: { token, ...options },
  })
}

export default useApi
