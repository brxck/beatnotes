export const formatSeconds = seconds => {
  const mm = new String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = new String(Math.floor(seconds % 60)).padStart(2, '0')
  return `${mm}:${ss}`
}
