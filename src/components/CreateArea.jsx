import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
    function expand(){
        setExpanded(true);
    }
    return (
        <div>
            <form>
                {isExpanded?<input name="title" onChange={handleChange} placeholder="Title" value={note.title} />:null}
                <textarea name="content" onClick={expand} onChange={handleChange} placeholder="Take a note..." value={note.content} rows={isExpanded?3:1} />
                <Zoom in = {isExpanded}><Fab className="fab-button" onClick={(event) => {
                    event.preventDefault();
                    props.onAdd(note);
                    setNote({
                        title: "",
                        content: ""
                    });
                }}><AddIcon/></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
