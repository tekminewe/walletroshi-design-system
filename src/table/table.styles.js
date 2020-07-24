import styled from 'styled-components'

import { getColor } from '../theme/color'

export const Container = styled.table`
  overflow-x: auto;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${getColor('light')};

  thead {
    color: white;
    background: ${getColor('primary')};
  }

  tbody {
    tr:nth-of-type(even) { 
      background: ${getColor('light')};
    }
  }
`

export const Row = styled.tr``

export const Column = styled.td`
  text-align: center;
  padding: 1rem;
`

export const Header = styled.th`
  padding: 1rem;
`
