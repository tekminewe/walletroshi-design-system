import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox'
})``

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`

const Checkbox = React.forwardRef(({ label, ...props }, ref) => (
  <StyledLabel>
    <StyledCheckbox {...props} ref={ref} />
    {label}
  </StyledLabel>
))

Checkbox.propTypes = {
  /**
   * Label of the checkbox
   */
  label: PropTypes.string,

  /**
   * Checked status of the checkbox
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Callback when the checked value is changed
   */
  onChange: PropTypes.func.isRequired
}


export default Checkbox
