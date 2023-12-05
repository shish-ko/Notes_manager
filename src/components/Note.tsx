import { Button, Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { INote } from "interfaces";
import React, { useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { editNote, removeNote } from "store/store";
import { theme } from "styles/MUI_theme";
import { useAppDispatch } from "~utils/customHooks";
import { getFormedText, getHashTags } from "~utils/helpers";

interface INoteProps {
  note: INote,
}
const editableDivStyle: React.CSSProperties = {
  ...theme.typography.body1,
  backgroundColor: pink[50],
  border: '1px solid black',
  borderRadius: '3px'
}
export const Note: React.FC<INoteProps> = ({ note }) => {
  const dispatch = useAppDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedNote, setEditedNote] = useState<INote>(note);
  
  const changeHandler = (e: ContentEditableEvent) => {
    const text = (e.nativeEvent.target as HTMLElement).innerText;
    setEditedNote({ ...note, description: text, hashTags: getHashTags(text) })
  };
  return (
    <Paper elevation={10} sx={{ width: '30%' }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent>
          {isEditMode ?
            <>
              <ContentEditable html={getFormedText(editedNote.description)} onChange={changeHandler} style={editableDivStyle} />
              <Typography color={theme.palette.primary.light}>{editedNote.hashTags}</Typography>
            </> :
            <>
              <Typography>{note.description}</Typography>
              <Typography color={theme.palette.primary.light}>{note.hashTags}</Typography>
            </>}
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button color="error" onClick={() => { dispatch(removeNote(note.id)) }}>Delete</Button>
          {isEditMode && <Button color="success" onClick={() => { dispatch(editNote(editedNote)); setIsEditMode(!isEditMode) }}>Save</Button>}
          <Button onClick={() => { setIsEditMode(!isEditMode); setEditedNote(note) }}>{isEditMode ? 'Cancel' : 'Edit'}</Button>
        </CardActions>
      </Card>
    </Paper>
  )
}