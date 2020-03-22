import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RoundCheckbox from './round_checkbox'

const StyledCheckbox = styled(RoundCheckbox)`
  margin-right: 1rem;
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
`

const Checkbox = React.forwardRef(({ label, ...props }, ref) => (
  <StyledLabel>
    <StyledCheckbox {...props} ref={ref} />
    {label}
  </StyledLabel>
))

Checkbox.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
  name: ''
}

Checkbox.propTypes = {
  /**
   * Label of the checkbox
   */
  label: PropTypes.string,

  /**
   * Checked status of the checkbox
   */
  checked: PropTypes.bool,

  /**
   * Callback when the checked value is changed
   */
  onChange: PropTypes.func,

  /**
   * Name of the input
   */
  name: PropTypes.string,
}

export default Checkbox
