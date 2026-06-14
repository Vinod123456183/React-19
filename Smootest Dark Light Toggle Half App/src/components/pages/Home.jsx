import React, { useContext, useState } from "react";
import { useThemeColors } from "../../colors";
import Header from "./Header";
import NoteCard from "./NoteCard";
import Modal from "react-modal";
import AddEditNotes from "../lib/AddEditNotes";
import axios from "axios";
Modal.setAppElement("#root");
import { useEffect } from "react";

function Home() {
  const { bgColor, allBlack, dateColor, lightborderClass, greyBlackText } =
    useThemeColors(); //importing color for dark n light theme

  const { pinTheme, pinTheme2 } = useThemeColors();
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const getNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/notes/display", {
        withCredentials: true,
      });
      console.log("Notes response:", res.data); // ✅ check this
      if (res.data.success === false) {
        return; // remove setError if not using
      }
      setNotes(res.data.notes);
    } catch (error) {
      console.log("Error fetching notes:", error);
    }
  };


  // const 

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Header />
      <div className={`w-full px-6 lg:px-12 py-8  `}>
        <div className="gap-4   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center mb-6">
          {notes.map((note) => (
            <NoteCard
              title={note.title}
              date={note.createdAt}
              content={note.content}
              tags={note.tags}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setModal({
              isShown: true,
              type: "add",
              data: null,
            })
          }
          className="h-16 w-16 flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 fixed right-10 lg:right-16 bottom-14 text-white text-3xl shadow-lg"
        >
          +
        </button>
        <Modal
          isOpen={modal.isShown}
          onRequestClose={() =>
            setModal({ isShown: false, type: "add", data: null })
          }
          className={`px-1 relative ${bgColor} ${allBlack} rounded-md w-full max-w-lg mx-auto mt-10 shadow-lg`}
          overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50"
        >
          <button
            onClick={() =>
              setModal({ isShown: false, type: "add", data: null })
            }
            className="absolute top-4 right-6 text-gray-700  hover:text-black text-xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* ✅ Updated here */}
          <AddEditNotes
            fetchNotes={getNotes}
            onClose={() =>
              setModal({ isShown: false, type: "add", data: null })
            }
            type={modal.type}
          />
        </Modal>
      </div>
    </>
  );
}

export default Home;
