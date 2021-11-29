import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface Props{
    note: Note,
    handleDelete: (id: string) => void
}

export const Notes = ({note, handleDelete}: Props) =>{
   return (
       <div className="mb-3">
           <Card style={{backgroundColor: note.color}}>
               <Card.Body>
                   <Card.Title>{note.title}</Card.Title>
                   <Card.Text>{note.text}</Card.Text>
                   <Card.Subtitle className="text-muted">{ note.date}</Card.Subtitle>
                   <Button className="mt-3" variant="danger" onClick={() => handleDelete(note.id)}>Delete</Button>
               </Card.Body>
           </Card>
       </div>
   );
};