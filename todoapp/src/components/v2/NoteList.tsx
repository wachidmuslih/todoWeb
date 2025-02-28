import { useNotes } from "../../contexs/TodoContextV2"

const NoteList = ({ setEditingNote }: { setEditingNote: any }) => {
    const { notes, deleteNote, toggleDone } = useNotes();

    return (
        <ul className="mt-4">
            {notes.map((note) => (
                <li
                    key={note.id}
                    className={`flex justify-between items-center p-3 border rounded-lg shadow-md mb-2 ${note.complete ? "bg-green-100 line-through text-gray-500" : "bg-white"}`}
                >
                    <span>{note.text}</span>
                    <div className="space-x-2">
                        <button onClick={() => toggleDone(note.id)} className="px-2 py-1 bg-blue-500 text-white rounded">
                            {note.complete ? "Undo" : "Done"}
                        </button>
                        <button onClick={() => setEditingNote(note)} className="px-2 py-1 bg-yellow-500 text-white rounded">
                            ✏️ Edit
                        </button>
                        <button onClick={() => deleteNote(note.id)} className="px-2 py-1 bg-red-500 text-white rounded">
                            🗑 Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NoteList;