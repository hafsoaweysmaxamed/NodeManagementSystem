import React, { useState } from 'react';
import Header from '../Components/Header';
import axios from "axios"

function Note() {
  
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
      
        const handleNote = (event) => {
          event.preventDefault()
          axios.post("http://localhost:2000/note/create", {
      
            "Title": title,
            "Description": description,
           
      
      
          }).then(() => {
            alert("note has been added sucessfully")
          
      
          }).catch((error) => console.log(error)
          )
        }

  return (

    <div>
<Header/>
   
    <div className="min-h-screen bg-[#16325B] flex items-center justify-center p-6">
      <form 
       
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Create a New Note</h2>

  
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
          <input
            
            type="text" value={title} onChange={(event)=>setTitle(event.target.value)}
            placeholder="Enter note title"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        {/* Description TextArea */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            value={description} onChange={(event)=>setDescription(event.target.value)}
            placeholder="Enter note description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="5"
            required
          ></textarea>
        </div>

        <button onClick={handleNote}
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-4 rounded-md hover:from-teal-600 hover:to-cyan-600 transition-colors"
        >
          Save Note
        </button>
      </form>
    </div>
    </div>
  );
}


export default Note;
