import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Column, Header } from './table.styles'

const Table = ({ renderRow, data, keyExtractor, renderHeader }) => {
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

  const renderTableHeader = () => {
    if (!renderHeader) {
      return null
    }

    return (
      <thead>
        {renderHeader()}
      </thead>
    )
  }

  return (
    <Container>
      {renderTableHeader()}
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
   * Function: (row, index) => Component
   */
  renderRow: PropTypes.func.isRequired,

  /**
   * Datasource of the table.
   * You can include `key` properties or use `keyExtrator()` for getting the key for each row
   */
  data: PropTypes.array.isRequired,

  /**
   * Function to get key for each row
   */
  keyExtractor: PropTypes.func,

  /**
   * Function that return header component
   * () => Component
   */
  renderHeader: PropTypes.func,
}

Table.Row = Row
Table.Column = Column
Table.Header = Header

export default Table
