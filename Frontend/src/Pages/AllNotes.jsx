import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';

import axios from 'axios';
import { NavLink } from 'react-router-dom';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  const getAllNotes = () => {
    axios.get('http://localhost:4000')
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllNotes();
  }, []);




  const deleteNotes = (id) => {
    axios
      .delete(`http://localhost:2000/note/delete/${id}`)
      .then(() => {
        alert('note has been deleted successfully');
        getAllNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">All Notes</h1>
        
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {notes.map((data) => (
              <div key={data.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">{data.Title}</h2>
                <p className="text-gray-700 mb-4">{data.Description}</p>
                <div className="flex justify-end space-x-4 text-2xl">

                   
                  <button    onClick={() => deleteNotes(data._id)}    className="text-red-500 hover:text-red-700 transition-colors">
                    <i className="fa-solid fa-trash"></i>
                  </button>
               <NavLink to={`/update/${data._id}`}>
                  <button className="text-blue-500 hover:text-blue-700 transition-colors">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">There are no notes available.</p>
        )}
      </div>
    </div>
  );
};

export default AllNotes;
