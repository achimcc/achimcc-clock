import * as React from 'react'

interface Props {
  hours: number
  minutes: number
}

const append = (digit: number): string => {
  if (digit < 10) return `0${digit}`
  else return `${digit}`
}

const clockStyles = {
  padding: '6px',
  height: 'auto',
  border: '4px solid',
  borderRadius: '10px',
  display: 'inline-block',
  margin: '1em',
  fontSize: '2em',
  fontWeight: 'bold' as 'bold'
}

const Clock = ({ hours, minutes }: Props) => {
  return (
    <div style={clockStyles}>
      {append(hours)}:{append(minutes)}
    </div>
  )
}

export default Clock
