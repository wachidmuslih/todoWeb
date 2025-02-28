import { useState } from "react"
import { NotesProvider } from "../contexs/TodoContextV2";
import NoteList from "../components/v2/NoteList";
import NoteForm from "../components/v2/NoteForm";

function TodoVersion2() {
    const [editingNote, setEditingNote] = useState(null);

    return (
        <NotesProvider>
            <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">📝 Notes App</h1>
                <NoteForm editingNote={editingNote} setEditingNote={setEditingNote}/>
                <NoteList setEditingNote={setEditingNote} />
            </div>
        </NotesProvider>
    )
}

export default TodoVersion2