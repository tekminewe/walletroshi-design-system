import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Column } from './table.styles'

const Table = ({ renderRow, data, keyExtractor }) => {
  const getKey = (index) => {
    const currentData = data[index]
    if (typeof currentData === 'object' && currentData.hasOwnProperty('key')) {
      return currentData.key
    }

    if (keyExtractor) {
      return keyExtractor(currentData)
    }
  
    return currentData
  }

  return (
    <Container>
      <tbody>
          {data.map((d, index) => (
            <React.Fragment key={getKey(index)}>
              {renderRow(d, index)}
            </React.Fragment>
          ))}
      </tbody>
    </Container>
  )
}

Table.propTypes = {
  /**
   * Function that return the component for each row
   */
  renderRow: PropTypes.func.isRequired,

  /**
   * Datasource of the table
   */
  data: PropTypes.array.isRequired,
}

Table.Row = Row
Table.Column = Column

export default Table
