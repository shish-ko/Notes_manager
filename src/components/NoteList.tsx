import { Fab, Stack } from "@mui/material"
import { INote } from "interfaces"
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { AddNoteForm } from "./AddNoteForm";
import { useAppSelector, useNotes } from "~utils/customHooks";
import { Note } from "./Note";
import { theme } from "styles/MUI_theme";

interface INoteListProps {
  notes?: INote[],
}
export const NoteList: React.FC<INoteListProps> = () => {
  const [isAddActive, setIsAddActive] = useState(false);
  const {notes} = useAppSelector((store)=> store.noteStore);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  return (
    <>
      {
        false ?
        <div></div> :
        <Stack direction={'row'} gap={'5%'} flexWrap={'wrap'} rowGap={theme.spacing(4)}>
          {notes.map((note)=><Note note={note} key={note.id}/>)}
        </Stack>
      }
      <Fab color="primary" sx={{ position: 'fixed', bottom: '140px', right: '140px' }} onClick={() => { setIsAddActive(!isAddActive) }}>
        <AddIcon />
      </Fab>
      <AddNoteForm isOpen={isAddActive} closeHandler={()=>{setIsAddActive(false)}}/>

    </>
  )
}