import Reviews from './Reviews'
import { render, screen, waitFor } from '@testing-library/react'

describe('Reviews', () => {
  it('fetch reviews successfully', async () => {
    render(<Reviews />)

    expect(screen.getByText('Loading')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Reviews Loaded :')).toBeInTheDocument()
    })
  })

  it('fetch reviews error', async () => {
    render(<Reviews />)

    expect(screen.getByText('Loading')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Reviews Loaded :')).toBeInTheDocument()
    })
  })
})
