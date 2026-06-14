import React, { useState } from "react";
import { useThemeColors } from "../../colors";
import axios from "axios";

function AddEditNotes({ fetchNotes, onClose, noteData = null, type = "add" }) {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [newTag, setNewTag] = useState("");

  const {
    bgColor2,
    allBlack,
    dateColor,
    bgInput,
    lightborderClass2,
    blackWhiteText,
    placeholderText,
    borderClass,
  } = useThemeColors();

  const handleAddTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
    }
    setNewTag("");
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addNewNote = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/notes/add",
        { title, content, tags },
        { withCredentials: true }
      );
      if (res.data.success) {
        fetchNotes();
        onClose();
      }
    } catch (error) {
      console.log("Error adding note:", error);
    }
  };

  const editNotes = async (req, res) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/notes/edit/${noteData._id}`
      );
    } catch (error) {}
  };

  const handleButton = () => {
    if (type === "add") {
      addNewNote();
    }
    // You can add update logic here later for editing
  };

  return (
    <div className="p-2 lg:p-4">
      <h2 className={`${blackWhiteText} text-2xl font-semibold mb-6`}>
        {type === "add" ? "Add Note" : "Edit Note"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full ${bgInput} ${blackWhiteText} p-3 border ${lightborderClass2} ${placeholderText} rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={`w-full h-56 p-3 border ${bgInput} ${blackWhiteText} ${placeholderText} ${lightborderClass2} rounded-md mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      <div className="max-h-32 overflow-y-auto flex flex-wrap gap-2 pb-4 pr-1">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-200 px-1 py-1 rounded-sm text-sm"
          >
            <span className="mr-1">#{tag}</span>
            <button
              onClick={() => handleRemoveTag(index)}
              className="ml-1 text-red-600 hover:text-red-800 font-bold"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5 mb-6">
        <input
          type="text"
          placeholder="#Tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddTag();
            }
          }}
          className={`max-w-40 p-2 border ${bgInput} ${blackWhiteText} ${placeholderText} ${lightborderClass2} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <button
          type="button"
          onClick={handleAddTag}
          className={`text-lg font-bold border px-3 py-1 bg-green-500 hover:bg-green-600 ${dateColor} ${borderClass} rounded`}
        >
          +
        </button>
      </div>

      <div className="flex justify-end gap-4">
        <button
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          onClick={handleButton}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddEditNotes;
