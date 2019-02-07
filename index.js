import React from "react";
import ReactDom from "react-dom";

import "./index.scss";

class App extends React.Component {
    state = {
        notes: [
            "Teste 1",
            "Teste 2"
        ]
    }

    render(){
        return (
            <div className="container"> 
            <NewNote />
            <NoteList notes={this.state.notes}/>
        </div>
        );
    }
}

const NewNote = () => (
        <div className="new-note">
            <input type="text" className="new-note_input" placeholder="Digite sua nota aqui..."/> 
        </div>
    );


const NoteList = ({ notes }) =>(
    <div className="note-list">
        {notes.map(note => <div className="note">{note}</div>)}
    </div>     
);

ReactDom.render(
    <App />,
    document.getElementById("root")
);