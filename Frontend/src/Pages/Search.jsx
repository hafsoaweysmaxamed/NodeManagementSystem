import React, { useState } from 'react';
import Header from '../Components/Header';
import axios from 'axios';

const Search = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(false);

    const getNote = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post("http://localhost:2000/search/note", {
             Title: title

             }).then((response) => {
                setNote(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setNote(null);
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-teal-50">
            <Header />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-teal-800">Search Notes</h1>

                <div className="flex justify-center mb-6">
                    <form className="flex flex-col items-center w-full sm:w-[500px] mx-auto">
                        <input 
                            value={title} 
                            onChange={(event) => setTitle(event.target.value)} 
                            type="text" 
                            placeholder="Enter title" 
                            className="w-full border border-teal-300 rounded-lg p-4 mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button 
                            onClick={getNote} 
                            className={`w-full py-3 text-white rounded-lg transition-colors ${loading ? 'bg-teal-400' : 'bg-teal-500 hover:bg-teal-600'}`}
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </form>
                </div>

                <div className="mt-8">
                    {note ? (
                        note.Title ? (
                            <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-2xl">
                                <h2 className="text-2xl font-semibold mb-4 text-teal-800">Note Details</h2>
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-teal-600">Title:</h3>
                                    <p className="text-gray-700">{note.Title}</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-teal-600">Description:</h3>
                                    <p className="text-gray-700">{note.Description}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-gray-600">No data found for the given title</p>
                        )
                    ) : (
                        <p className="text-center text-gray-600">Please enter a title to search for results.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
