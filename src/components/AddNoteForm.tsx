import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFormedText, getHashTags } from "~utils/helpers";
import ContentEditable from 'react-contenteditable';
import { theme } from "styles/MUI_theme";

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

export const AddNoteForm: React.FC<IAddNoteFormProps> = ({ isOpen, closeHandler }) => {
  const [note, setNote] = useState('');
  const tags = getHashTags(note);
  return (
    <Dialog open={isOpen} onClose={closeHandler}>
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText mb={1}>
          Print your note using <Typography component='span' sx={{color: theme.palette.primary.light, fontStyle:"italic"}}>#hashtags</Typography> to make it easier to find relative notes later.
        </DialogContentText>
        <ContentEditable  style={inputStyle} html={getFormedText(note)} onChange={(e)=> {setNote((e.nativeEvent.target as HTMLElement).innerText)}}/> 
        {tags && <Typography sx={{color: theme.palette.primary.light, width: '100%', overflow: 'hidden'}}>{tags}</Typography>} 
        <DialogActions>
          <Button>Create note</Button> 
        </DialogActions>     
      </DialogContent>
    </Dialog>
  )
}