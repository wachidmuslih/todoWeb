import { useState, useEffect } from "react";
import { useNotes } from "../../contexs/TodoContextV2";


const NoteForm = ({ editingNote, setEditingNote }: { editingNote: any; setEditingNote: any }) => {
  const { addNote, editNote } = useNotes();
  const [text, setText] = useState("");

  // Update input field when editing a note
  useEffect(() => {
    if (editingNote) {
      setText(editingNote.text);
    } else {
      setText("");
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingNote) {
      editNote(editingNote.id, text);
      setEditingNote(null);
    } else {
      addNote(text);
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a note..."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex justify-between">
        <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded-md">
          {editingNote ? "Update Note" : "Add Note"}
        </button>
        {editingNote && (
          <button
            type="button"
            onClick={() => setEditingNote(null)}
            className="px-3 py-2 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
