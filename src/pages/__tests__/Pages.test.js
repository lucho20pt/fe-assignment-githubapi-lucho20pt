import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import About from 'pages/About'

// import { useAppSelector } from 'app/hooks'
// import { testUseAppSelector } from 'app/testUseAppSelector'

jest.mock('app/hooks')

// ABOUT PAGE
describe('About', () => {
  // beforeEach(() => {
  //   useAppSelector.mockImplementation(testUseAppSelector)
  // })

  it('renders About the challenge text', async () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    )
    const textElement = await screen.findByText(/About the challenge/i)
    expect(textElement).toBeInTheDocument()
  })
})
