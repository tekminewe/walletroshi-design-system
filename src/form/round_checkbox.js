import React from 'react'
import styled from 'styled-components'

const StyledRoundCheckbox = styled.div`
  position: relative;

  label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: -2.5px;
    left: 0;
    height: 24px;
    width: 24px;
  }

  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    opacity: 0;
    position: absolute;
    left: 5px;
    top: 6px;
    transform: rotate(-45deg);
    height: 5px;
    width: 10px;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`

const RoundCheckbox = ({ className, ...props }) => (
  <StyledRoundCheckbox className={className}>
    <input type="checkbox" id="checkbox" {...props} />
    <label htmlFor="checkbox"></label>
  </StyledRoundCheckbox>
)

export default RoundCheckbox
