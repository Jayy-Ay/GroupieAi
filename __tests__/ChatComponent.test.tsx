import { render } from '@testing-library/react'
import ChatComponent from '../app/components/ChatComponent'

describe('ChatComponent', () => {
  it('renders without crashing', () => {
    render(<ChatComponent messages={[]} />)
  })
})