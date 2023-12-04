import { INote } from "interfaces";
import { useEffect, useState } from "react";

const useFakeLoader = () => {
  const [res, setRes] = useState(false);
  setTimeout(() => { setRes(true) }, 2000)
  return res
}

const useNotes = () => {
  const [notes, setNotes] = useState<INote[]>();
  useEffect(() => {
    if (!localStorage.getItem('notes')) {
      localStorage.setItem('notes', '[]');
      setNotes([]);
      
    }

  },[notes])

  const note = JSON.parse(localStorage.getItem('notes') || '') as INote[];
  return { notes, addNote, removeNote }
}

export { useFakeLoader, useNotes };
