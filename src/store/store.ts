import { configureStore, createSlice } from '@reduxjs/toolkit';
import { INote } from 'interfaces';

interface IInitialState {
  notes: INote[],
  searchHashtags: string
}
const initialState: IInitialState = {
  notes: [],
  searchHashtags: ''
}

const noteStore = createSlice({
  name: 'noteStore',
  initialState,
  reducers: {
    addNotes: (store, { payload }: { payload: INote[] }) => {
      store.notes = payload
    },
    addNote: (store, { payload }: { payload: INote }) => {
      store.notes.push(payload);
    },
    removeNote: (store, { payload }: { payload: string }) => {
      store.notes.filter((note) => note.id !== payload);
    },
    editNote: (store, { payload }: { payload: INote }) => {
      const noteToEdit = store.notes.findIndex((note) => note.id === payload.id);
      store.notes.splice(noteToEdit, 1, payload);
    }
  }
});

export const store = configureStore({
  reducer: {
    noteStore: noteStore.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { addNote, addNotes, removeNote, editNote } = noteStore.actions;