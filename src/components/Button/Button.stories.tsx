// Button.story.js|jsx
import { Button } from './Button.component'
import React from 'react'

export default {
  title: 'Path/To/Button',
  component: Button,
}

export const Basic = () => <Button />

export const WithProp = () => <Button FOO="value" />
