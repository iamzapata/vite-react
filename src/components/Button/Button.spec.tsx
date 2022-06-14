import { Button } from './Button.component'
import { render, screen } from '@testing-library/react'

describe('<Button />', () => {
  it('renders', () => {
    // 1) Arrange
    // 2) Act
    // 3) Assert

    render(<Button />)

    expect(screen.findByText('Foo')).toBeTruthy()
  })
})
