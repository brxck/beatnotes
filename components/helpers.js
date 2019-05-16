export const secondsToTimestamp = seconds => {
  const hh = Math.floor(seconds / 3600).toString()
  const mm = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const ss = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')

  return `${hh == '0' ? '' : `${hh}:`}${mm}:${ss}`
}
