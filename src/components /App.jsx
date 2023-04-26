import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNotes(newnotes){
    return(
<Note
key = {newnotes.key}
title ={newnotes.title}
content = {newnotes.content}
/>
    )
}

function App(){
    return(
        <><Header />
       {notes.map(createNotes)}
        <Footer />
        </>
    )
}
export default App;