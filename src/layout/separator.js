import styled from 'styled-components';
import { getColor } from '../color';

const Separator = styled.div`
  height: 1px;
  background-color: ${getColor('light')};
  margin: 1rem 0;
  width: 100%;
`

export default Separator;
