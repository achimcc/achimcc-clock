import * as React from 'react'
import styles from './styles.module.css'
import Clock from './clock'

interface Props {
  text: string
}

export { Clock }

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
