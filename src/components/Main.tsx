import { CircularProgress, Container } from "@mui/material";
import React from "react";
import { NoteList } from "./NoteList";
import { useFakeLoader } from "~utils/customHooks";

export const Main: React.FC = () => {
  const store = useFakeLoader();

  return (
    <Container>
      {
        store ?
          <NoteList /> :
          <CircularProgress />
      }
    </Container>
  )
}