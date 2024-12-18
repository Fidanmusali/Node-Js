import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/books', {
        title,
        author,
        publishYear
      })
      navigate('/books/details')  
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <h1>Create New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Publish Year:</label>
          <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default CreateBook
