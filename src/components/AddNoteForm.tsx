import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFormedText } from "~utils/helpers";
import { theme } from "styles/MUI_theme";

interface IAddNoteFormProps {
  isOpen: boolean;
  closeHandler: () => void
}

const textareaStyle: React.CSSProperties = {
  ...theme.typography.subtitle1,
  width: '100%',
  resize: 'none',
  zIndex: 1,
  backgroundColor: 'transparent',
  position: 'absolute',
  caretColor: 'black',
  color: 'red',
  // top: 0, 
  // left: 0, 
  // right: 0, 
  // bottom: 0
  // overflow: 'hidden'
  maxLines: '30'
}
export const AddNoteForm: React.FC<IAddNoteFormProps> = ({ isOpen, closeHandler }) => {
  const [note, setNote] = useState('');
  console.log(getFormedText(note))
  return (
    <Dialog open={isOpen} onClose={closeHandler}>
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Print your note and chose <Typography component={'span'} sx={{ fontStyle: 'oblique' }}>share</Typography> if you want to create a post on FaceBook
        </DialogContentText>
        {/* <Box position={'relative'}> */}
          <div style={{ overflowX: 'hidden', overflowY: 'scroll', wordBreak: 'break-word',  border: '2px solid green', position: 'relative' }} >
            <textarea style={textareaStyle} value={note} onChange={(e) => { setNote(e.target.value); }} />
            <Typography maxWidth={'100%'} variant="subtitle1">{getFormedText(note)}</Typography>
          </div>
        {/* </Box> */}
      </DialogContent>
    </Dialog>
  )
}