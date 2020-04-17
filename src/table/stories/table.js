import React from 'react'
import Table from '../table'

const data = [
  {
    id: '1',
    firstName: 'Indiana',
    lastName: 'Jones',
    age: 8,
  },
  {
    id: '2',
    firstName: 'Alan',
    lastName: 'Walker',
    age: 18,
  },
  {
    id: '3',
    firstName: 'Lady',
    lastName: 'Gaga',
    age: 28,
  },
  {
    id: '4',
    firstName: 'Sushi',
    lastName: 'Queen',
    age: 28,
  },
  {
    id: '5',
    firstName: 'Burger',
    lastName: 'King',
    age: 98,
  },
]

const TableStory = () => {
  const renderRow = (data) => {
    const { id, firstName, lastName, age } = data
    return (
      <Table.Row>
        <Table.Column>
          {id}
        </Table.Column>
        <Table.Column>
          {firstName}
        </Table.Column>
        <Table.Column>
          {lastName}
        </Table.Column>
        <Table.Column>
          {age}
        </Table.Column>
      </Table.Row>
    )
  }

  return (
    <Table
      renderRow={renderRow}
      data={data}
      keyExtractor={row => row.id}
    />
  )
}

export default TableStory
