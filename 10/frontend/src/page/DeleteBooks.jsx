import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const DeleteBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`)
      navigate('/books/details') 
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h1>Are you sure you want to delete this book?</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteBook
