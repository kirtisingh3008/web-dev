import React, {useState, useRef, FormEvent} from 'react';
import {Note} from '../models/note.model';
import {Alert , Form, FormGroup, FormLabel , FormControl, Button} from 'react-bootstrap';

interface Props {
    notes: Note[],    //array to set notes
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export const CreateNotes = ({notes, setNotes}: Props) => {

    const [error, setError] = useState("");
    // title of the card
    const cardTitle = useRef<HTMLInputElement | null>(null);
   //  text of the card
   const cardText =useRef<HTMLTextAreaElement | null>(null);
   // color of the card
   const cardColor =useRef<HTMLInputElement | null>(null);
   
   const handleSubmit = (e: FormEvent<HTMLFormElement>): void =>{
       e.preventDefault();
       // prevent the page from reloading when the user click enter
      
       // validating it like if anyof the field is empty 
       // return setError 
       if(cardTitle.current?.value === "" || cardText.current?.value === "" )
       {
           return setError("Please Fill all the fields");
       }
      // otherwise error is empty
       setError("");
       setNotes([...notes, {
           id: (new Date()).toString(),
           title: (cardTitle.current as HTMLInputElement).value,
           text: (cardText.current as HTMLTextAreaElement).value,
           color: (cardColor.current as HTMLInputElement).value,
           date: (new Date()).toString()
       }]);
      
       (cardTitle.current as HTMLInputElement).value = "";
       (cardText.current as HTMLTextAreaElement).value = "";
  }
  return (
      <>
        <h2>Create Notes</h2>
        {error && <Alert variant="danger">{ error}</Alert>}
        <Form className ="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
         <FormGroup className="mb-3" controlId="formBaicTitle">
            <FormLabel>Title</FormLabel>
            <FormControl type="text" 
            placeholder="Enter Title for the Note" 
            ref={cardTitle}/>
         </FormGroup>

         <FormGroup className="mb-3" controlId="formBaicText">
            <FormLabel>Text</FormLabel>
            <FormControl 
            placeholder="Enter Your Notes" as="textarea" 
            rows={3} ref={cardText}/>
         </FormGroup>

         <FormGroup className="mb-3">
            <FormLabel htmlFor="colorInput">Color Notes</FormLabel>
            <FormControl 
            type="color" 
            id="colorInput" 
            defaultValue="#dfdfdf" 
            title="Choose Color of your choice"
            ref ={cardColor}/>
         </FormGroup>
         <Button type="submit" variant="primary">
             Submit Here
         </Button>
        </Form>
      </>
  );
};
