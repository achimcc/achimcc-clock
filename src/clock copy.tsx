import * as React from 'react'
import styles from './styles.module.css'

interface Props {
    hours: number,
    minutes: number
  }

const append = (digit: number) : string => {
    if(digit<10) return `0${digit}`
    else return `${digit}`
}

const Clock = ({ hours, minutes }: Props) => {
    return (
    <div className={styles.clock}>
        {append(hours)}:{append(minutes)}
    </div>
    )
}

export default Clock