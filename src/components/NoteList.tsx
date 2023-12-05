import { Fab } from "@mui/material"
import { INote } from "interfaces"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { AddNoteForm } from "./AddNoteForm";
import { useAppSelector, useNotes } from "~utils/customHooks";
import { Note } from "./Note";

interface INoteListProps {
  notes?: INote[],
}
export const NoteList: React.FC<INoteListProps> = () => {
  const [isAddActive, setIsAddActive] = useState(true);
  const [targetHashtag, setTargetHashtag] = useState();
  const {notes} = useAppSelector((store)=> store.noteStore);
  console.log(notes)
  return (
    <>
      {
        targetHashtag ?
        <div></div> :
        notes.map((note)=><Note note={note} />)
      }
      <Fab color="primary" sx={{ position: 'fixed', bottom: '140px', right: '140px' }} onClick={() => { setIsAddActive(!isAddActive) }}>
        <AddIcon />
      </Fab>
      <AddNoteForm isOpen={isAddActive} closeHandler={()=>{setIsAddActive(false)}}/>

    </>
  )
}