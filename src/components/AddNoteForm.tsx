import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFormedText } from "~utils/helpers";
import { theme } from "styles/MUI_theme";

interface IAddNoteFormProps {
  isOpen: boolean;
  closeHandler: () => void
}
export const AddNoteForm: React.FC<IAddNoteFormProps> = ({ isOpen, closeHandler }) => {
  const [note, setNote] = useState('');
  console.log(getFormedText(note))
  return (
    <Dialog open={isOpen} onClose={closeHandler}>
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Print your note and chose <Typography component={'span'} sx={{fontStyle: 'oblique'}}>share</Typography> if you want to create a post on FaceBook
        </DialogContentText>
        <Box position={'relative'}>
          <textarea style={{width: '100%', ...theme.typography.subtitle1, resize: 'none', }} value={note} onChange={(e)=> {
            setNote(e.target.value);
          }}/>
          <div style={{top:0, left: 0, right:0, bottom: 0, overflow: 'clip', border: '3px solid green', position: 'absolute', zIndex: '-1'}} >
            <Typography variant="subtitle1">{getFormedText(note)}</Typography>
            </div>
        </Box>
      </DialogContent>
    </Dialog>
  )
}