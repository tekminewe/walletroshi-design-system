import styled from 'styled-components'

import { getColor } from '../color'

export const Container = styled.table`
  overflow-x: auto;
  width: 100%;
  border-collapse: collapse;
`

export const Row = styled.tr`
  :nth-of-type(odd) { 
    background: ${getColor('light')}; 
  }
`

export const Column = styled.td`
  padding: 1rem;
`
