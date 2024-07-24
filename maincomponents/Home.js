import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='task-container'>
        <h3>Task List</h3>
        <div className="task-links">
          <Link to='/simple'>Task 1</Link>
          <Link to='/state'>Task 2</Link>
          <Link to='/conditionalrendcomponent'>Task 3</Link>
          <Link to='/formscontrolledcomponents'>Task 4</Link>
          <Link to='/fetchapp'>Task 5</Link>
          <Link to='/useeffectdatafetchingcomponent'>Task 6</Link>
          <Link to='/parentcomponent'>Task 8</Link>
        </div>
    </div>
  )
}

export default Home