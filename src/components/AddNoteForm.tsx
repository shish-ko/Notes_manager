import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFormedText, getHashTags } from "~utils/helpers";
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { theme } from "styles/MUI_theme";
import { useNotes } from "~utils/customHooks";
import {v4 as uuid} from 'uuid';
import { INote } from "interfaces";

interface IAddNoteFormProps {
  isOpen: boolean;
  closeHandler: () => void
}
const inputStyle: React.CSSProperties ={
  ...theme.typography.subtitle1,
  border: '1px solid black',
  padding: theme.spacing(1),
  width: '100%'
}
const initialNote:INote ={
  id: uuid(),
  description: '',
  hashTags: ''
}
export const AddNoteForm: React.FC<IAddNoteFormProps> = ({ isOpen, closeHandler }) => {
  const [note, setNote] = useState<INote>(initialNote);
  const changeNote=(e: ContentEditableEvent)=> {
    const text = (e.nativeEvent.target as HTMLElement).innerText;
    setNote({...note, description: text, hashTags: getHashTags(text) })
  }
  const {addStorageNote} = useNotes();
  return (
    <Dialog open={isOpen} onClose={closeHandler}>
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText mb={1}>
          Print your note using <Typography component='span' sx={{color: theme.palette.primary.light, fontStyle:"italic"}}>#hashtags</Typography> to make it easier to find relative notes later.
        </DialogContentText>
        <ContentEditable  style={inputStyle} html={getFormedText(note.description)} onChange={changeNote}/> 
        {note.hashTags && <Typography sx={{color: theme.palette.primary.light, width: '100%', overflow: 'hidden'}}>{note.hashTags}</Typography>} 
        <DialogActions>
          <Button onClick={()=>addStorageNote(note)}>Create note</Button> 
        </DialogActions>     
      </DialogContent>
    </Dialog>
  )
}