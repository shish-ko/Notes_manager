import { Fab } from "@mui/material"
import { INote } from "interfaces"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { AddNoteForm } from "./AddNoteForm";

interface INoteListProps {
  notes?: INote[],
}
export const NoteList: React.FC<INoteListProps> = () => {
  const [isAddActive, setIsAddActive] = useState(true);
  return (
    <>
      <Fab color="primary" sx={{ position: 'fixed', bottom: '140px', right: '140px' }} onClick={() => { setIsAddActive(!isAddActive) }}>
        <AddIcon />
      </Fab>
      <AddNoteForm isOpen={isAddActive} closeHandler={()=>{setIsAddActive(false)}}/>

    </>
  )
}