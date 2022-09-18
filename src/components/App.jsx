import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header"
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);
    function addItem(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            }
            )
        })
    }

    return <div>
        <Header />
        <CreateArea
            onAdd={addItem} />
        {notes.map((note,index) => (
            <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote} />
        ))}
        <Footer />

    </div>
}

export default App;