import styles from './Button.module.scss'
import React from 'react'

interface ButtonProps {
  FOO?: string
}

const Button = ({ FOO }: ButtonProps) => (
  <div className={styles.Button}>{FOO}</div>
)

export { Button }
