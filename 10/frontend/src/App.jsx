import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home.jsx'
import CreateBook from './page/CreateBook.jsx'
import ShowBooks from './page/ShowBooks.jsx'
import EditBooks from './page/EditBooks.jsx'
import DeleteBooks from './page/DeleteBooks.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/details" element={<ShowBooks/>} />
      <Route path="/books/edit/:id" element={<EditBooks/>} />
      <Route path="/books/delete/:id" element={<DeleteBooks/>} />
    </Routes>
  )
}

export default App