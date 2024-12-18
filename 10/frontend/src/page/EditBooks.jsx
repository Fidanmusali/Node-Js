import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState({ title: '', author: '', publishYear: '' })

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`)
        setBook(response.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchBook()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3000/books/${id}`, book)
      navigate('/books/details')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Publish Year"
          value={book.publishYear}
          onChange={(e) => setBook({ ...book, publishYear: e.target.value })}
          required
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  )
}

export default EditBook
