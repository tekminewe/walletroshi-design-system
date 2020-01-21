import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const StyledText = styled(Text)`
  font-size: 0.75rem;
`

const SmallText = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export default SmallText;
