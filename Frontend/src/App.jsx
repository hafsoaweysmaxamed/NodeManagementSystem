import React from 'react'
import Note from './Pages/Note'
import Home from './Pages/Home'
import {Routes, Route} from "react-router-dom"
import AllNotes from './Pages/AllNotes'
import Search from './Pages/Search'
import Update from './Pages/Update'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='add' element={<Note/>} />
        <Route path ='/notes' element={<AllNotes/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path ='/update/:id' element= {<Update/>}/>
      </Routes>
    </div>
  )
}

export default App
