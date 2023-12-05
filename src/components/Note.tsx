import { Button, Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import { INote } from "interfaces";
import React from "react";

interface INoteProps {
  note: INote,
  // searchHandler: ()=> void
}
export const Note:React.FC<INoteProps> = ({note, searchHandler})=> {
  return(
    <Paper elevation={12}>
      <Card>
        <CardContent>
          <Typography>{note.description}</Typography>
        </CardContent>
        <CardActions>
          <Button color="error">Delete</Button>
          <Button>Edit</Button>
        </CardActions>
      </Card>

    </Paper>
  )
}