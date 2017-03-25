import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const PEERS = [
  {id: 0, name: 'Jack', friends: [1, 2, 3]},
  {id: 1, name: 'Rose', friends: [1, 3]},
  {id: 2, name: 'Tom', friends: [2, 3]},
  {id: 3, name: 'Kevin', friends: [0, 3]},
  {id: 4, name: 'Nick', friends: [2, 4]}
]

const find = (id) => PEERS.find(p => p.id === id)

const RecursiveExample = () => (
  <Router>
    <Person match={{params: {id: 0}, url: ''}} />
  </Router>
)

const Person = ({ match }) => {
  const person = find(match.params.id)
  return (
    <div>
      <h3>{ person.name }'s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{ find(id).name }</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  )
}

export default RecursiveExample
