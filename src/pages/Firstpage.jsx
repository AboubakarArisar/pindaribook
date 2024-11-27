import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const initialNotes = [
  { id: 1, title: "First Note", content: "This is a sample note content." },
  {
    id: 2,
    title: "Second Note",
    content: "This is another sample note content.",
  },
  {
    id: 3,
    title: "Third Note",
    content: "Some more sample content for a note.",
  },
];

const Firstpage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [notes, setNotes] = useState(initialNotes);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //     }
  //   }, [token, navigate]);

  const createNote = () => {
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        title: newNote.title || "New Note",
        content: newNote.content || "This is a new note.",
      },
    ]);
    setIsDialogOpen(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  return (
    <div className='w-full h-screen flex flex-col items-center bg-gray-100 py-10'>
      <div className='w-full max-w-4xl flex justify-center mb-8'>
        <CustomButton onClick={() => setIsDialogOpen(true)}>
          {" "}
          Create Note
        </CustomButton>
      </div>

      <div className='w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {notes.map((note) => (
          <div
            key={note.id}
            className='bg-white shadow-lg rounded-lg overflow-hidden h-60'
          >
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-800'>
                {note.title}
              </h2>
              <p className='text-gray-600 mt-2'>{note.content}</p>
            </div>
          </div>
        ))}
      </div>

      {isDialogOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-96 max-w-full transform transition-all scale-100'>
            <h2 className='text-xl font-semibold mb-4'>Create New Note</h2>
            <div>
              <input
                type='text'
                name='title'
                placeholder='Note Title'
                value={newNote.title}
                onChange={handleInputChange}
                className='w-full mb-4 p-2 border border-gray-300 rounded-lg'
              />
              <textarea
                name='content'
                placeholder='Note Content'
                value={newNote.content}
                onChange={handleInputChange}
                rows='4'
                className='w-full p-2 border border-gray-300 rounded-lg'
              />
            </div>
            <div className='mt-4 flex justify-end space-x-4'>
              <button
                onClick={handleDialogClose}
                className='bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition'
              >
                Cancel
              </button>
              <CustomButton
                onClick={createNote}
                className=' text-white py-2 px-4 rounded-lg transition'
              >
                Create Note
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Firstpage;
