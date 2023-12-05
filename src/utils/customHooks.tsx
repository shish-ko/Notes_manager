import { INote } from "interfaces";
import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addNote, addNotes, editNote, removeNote } from "store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useFakeLoader = () => {
  const [res, setRes] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const storageNotes = localStorage.getItem('notes')
    if (!storageNotes) {
      localStorage.setItem('notes', '[]');
    } else {
      dispatch(addNotes(JSON.parse(storageNotes)));
    }
    setTimeout(() => { setRes(true) }, 2000);
  },[])
  return res
}

const useNotes = () => {
  const {notes} = useAppSelector((store) => store.noteStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  const addStorageNote = (note: INote) => {
    dispatch(addNote(note))
  }
  const removeStorageNote = (note: INote) => {
    console.log(1)
    dispatch(removeNote(note.id))
  }
  const editStorageNote = (note: INote) => {
    dispatch(editNote(note));
  }
  return { notes, addStorageNote, removeStorageNote, editStorageNote }
}

export { useFakeLoader, useNotes };
