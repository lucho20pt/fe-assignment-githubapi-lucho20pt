import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'

// import { useAppSelector } from 'app/hooks'
// import { testUseAppSelector } from 'app/testUseAppSelector'

jest.mock('app/hooks')

// APP
describe('App', () => {
  // beforeEach(() => {
  //   useAppSelector.mockImplementation(testUseAppSelector)
  // })

  it('renders learn react link', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = await screen.findByText(/home/i)
    expect(linkElement).toBeInTheDocument()
  })
})
