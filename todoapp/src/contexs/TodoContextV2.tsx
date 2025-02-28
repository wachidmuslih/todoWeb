import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

// 📝 Define the structure of a Note
type Note = {
    id: number;
    text: string;
    complete: boolean;
}

// 🎯 Define Action Types
type Action =
  | { type: "ADD_NOTE"; payload: string }
  | { type: "DELETE_NOTE"; payload: number }
  | { type: "EDIT_NOTE"; payload: { id: number; text: string } }
  | { type: "TOGGLE_DONE"; payload: number }
  | { type: "SET_NOTES"; payload: Note[] }; // Load from LocalStorage


// 🎯 Define State Type
type State = { notes: Note[] };

// 🎯 Define Action Types
type NoteContextType = {
    notes: Note[];
    addNote: (text: string) => void;
    deleteNote: (id: number) => void;
    editNote: (id: number, text: string) => void;
    toggleDone: (id: number) => void;
}

// 📌 Initial State
const initialState: State = { notes: [] };

// ⚡ Reducer Function
const notesReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_NOTE":
            const newNotes = [...state.notes, { id: Date.now(), text: action.payload, complete: false }];
            localStorage.setItem("notes", JSON.stringify(newNotes));
            return { notes: newNotes };

        case "DELETE_NOTE":
            const filteredNotes = state.notes.filter((note: any) => note.id !== action.payload);
            localStorage.setItem("notes", JSON.stringify(filteredNotes));
            return { notes: filteredNotes };

        case "EDIT_NOTE":
            const updatedNotes = state.notes.map((note: any) =>
                note.id === action.payload.id ? { ...note, text: action.payload.text } : note)
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return { notes: updatedNotes };

        case "TOGGLE_DONE":
            const toggleNotes = state.notes.map((note: any) =>
                note.id === action.payload ? { ...note, complete: !note.complte } : note
            );
            localStorage.setItem("notes", JSON.stringify(toggleNotes));
            return { notes: toggleNotes };

        case "SET_NOTES":
            return { notes: action.payload };

        default:
            return state;

    }
}

// 📌 Create Context
const NotesContext = createContext<NoteContextType | undefined>(undefined);

// 📌 Provider Component
export const NotesProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(notesReducer, initialState)

    // Load notes from LocalStorage on first render
    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes){
            dispatch({type: "SET_NOTES", payload:JSON.parse(savedNotes)});
        }
    }, []);

    const addNote = (text: string) => dispatch({type: "ADD_NOTE", payload: text});
    const deleteNote  = (id: number) => dispatch({type: "DELETE_NOTE", payload: id});
    const editNote = (id: number, text: string) => dispatch({type: "EDIT_NOTE", payload: { id, text }});
    const toggleDone  = (id: number) => dispatch({type: "TOGGLE_DONE", payload: id});

    return(
        <NotesContext.Provider value={{ notes: state.notes, addNote, deleteNote, editNote, toggleDone }}>
            {children}
        </NotesContext.Provider>
    )
}

// 📌 Custom Hook
export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) throw new Error("useNotes must be used within a NotesProvider");
    return context;
};