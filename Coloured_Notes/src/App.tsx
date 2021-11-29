import React, { useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CreateNotes } from './components/CreateNotes';
import { Header } from './components/Header';
import { NoteList } from './components/NoteList';
import {Note} from './models/note.model';


function App() {
  const [notes, setNotes] =useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: " Go to workout",
    color: "#dfdfdf",
    date: (new Date).toString()
  }])

   return(
     <>
     
     <Header/>
     <Container className="mt-5">
     <Row>
       <Col>
         <CreateNotes notes={notes} setNotes={setNotes} />
       </Col>
     </Row>
     <Row>
       <Col>
         <NoteList notes={notes} setNotes={setNotes} />
       </Col>
     </Row>
     </Container>
     </>
   );
};
export default App;
