import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";
import { getFormedText, getHashTags } from "~utils/helpers";
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { theme } from "styles/MUI_theme";
import { useAppDispatch } from "~utils/customHooks";
import { v4 as uuid } from 'uuid';
import { INote } from "interfaces";
import { addNote } from "store/store";
import { HashtagList } from "./HashtagList";

interface IAddNoteFormProps {
  isOpen: boolean;
  closeHandler: () => void
}
const inputStyle: React.CSSProperties = {
  ...theme.typography.subtitle1,
  border: '1px solid black',
  padding: theme.spacing(1),
  width: '100%'
}
const getNewNote = (): INote => ({
  id: uuid(),
  description: '',
  hashTags: []
})
export const AddNoteForm: React.FC<IAddNoteFormProps> = ({ isOpen, closeHandler }) => {
  const [note, setNote] = useState<INote>(getNewNote());
  const dispatch = useAppDispatch();

  const changeHandler = (e: ContentEditableEvent) => {
    const text = (e.nativeEvent.target as HTMLElement).innerText;
    setNote({ ...note, description: text, hashTags: getHashTags(text) })
  };
  const addHandler = () => {
    dispatch(addNote(note));
    setNote(getNewNote());
    closeHandler();
  };

  return (
    <Dialog open={isOpen} onClose={closeHandler}>
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText mb={1}>
          Print your note using <Typography component='span' sx={{ color: theme.palette.primary.light, fontStyle: "italic" }}>#hashtags</Typography> to make it easier to find relative notes later.
        </DialogContentText>
        <ContentEditable style={inputStyle} html={getFormedText(note.description)} onChange={changeHandler} />
        {note.hashTags && <HashtagList hashTags={note.hashTags} />}
        <DialogActions>
          <Button onClick={addHandler}>Create note</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}