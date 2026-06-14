import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, updateToDo } from "../../slices/ToDoSlice";

const ToDoApp: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.value); // 👈 get data
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add or update a task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={() => {
              dispatch(addToDo(input));
              setInput("");
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* List */}
        <ul className="space-y-2">
          {todos.map((todo: string, index: number) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
            >
              <span>{todo}</span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    dispatch(updateToDo({ index, newValue: input }))
                  }
                  className="text-green-500"
                >
                  Update
                </button>

                <button
                  onClick={() => dispatch(deleteToDo(index))}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
