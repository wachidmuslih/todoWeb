import { useNotes } from "../../contexs/TodoContextV2"

const NoteList = ({ setEditingNote }: { setEditingNote: any }) => {
    const { notes, deleteNote, toggleDone } = useNotes();

    return (
        <ul>
          {notes.map((note) => (
            <li key={note.id} style={{ textDecoration: note.complete ? "line-through" : "none" }}>
              {note.text}
              <button onClick={() => toggleDone(note.id)}>
                {note.complete ? "🔄 Undone" : "✅ Done"}
              </button>
              <button onClick={() => setEditingNote(note)}>✏️ Edit</button>
              <button onClick={() => deleteNote(note.id)}>🗑 Delete</button>
            </li>
          ))}
        </ul>
      );
};

export default NoteList;