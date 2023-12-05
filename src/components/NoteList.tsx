import { Fab, Stack, Typography } from "@mui/material";
import { INote } from "interfaces";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { AddNoteForm } from "./AddNoteForm";
import { useAppSelector } from "~utils/customHooks";
import { Note } from "./Note";
import { theme } from "styles/MUI_theme";
import { getMatchedNotes } from "~utils/helpers";

interface INoteListProps {
  notes?: INote[],
}
export const NoteList: React.FC<INoteListProps> = () => {
  const [isAddActive, setIsAddActive] = useState(false);
  const { notes, searchHashtags } = useAppSelector((store) => store.noteStore);
  console.log(getMatchedNotes(notes, searchHashtags))
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  return (
    <>
      {notes.length ?
        <Stack direction={'row'} gap={'5%'} flexWrap={'wrap'} rowGap={theme.spacing(4)}>
          {searchHashtags.length ?
            getMatchedNotes(notes, searchHashtags).map((note) => <Note note={note} key={note.id} />) :
            notes.map((note) => <Note note={note} key={note.id} />)
          }
        </Stack> :
        <Typography variant="h4">Press add button to fill note form</Typography>
      }
      <Fab color="primary" sx={{ position: 'fixed', bottom: '140px', right: '140px' }} onClick={() => { setIsAddActive(!isAddActive) }}>
        <AddIcon />
      </Fab>
      <AddNoteForm isOpen={isAddActive} closeHandler={() => { setIsAddActive(false) }} />
    </>
  )
}