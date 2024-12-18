import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Bookstore</h1>
      <nav>
        <ul>
          <li><Link to="/books/create">Create Book</Link></li>
          {/* <li><Link to="/books/details">Show Books</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Home
