import React from 'react'
import styled from 'styled-components'

const StyledMargin = styled.div`
  margin: 1rem;
`

const Margin = ({ children }) => (
  <StyledMargin>
    {children}
  </StyledMargin>
)

export default Margin
