import { Typography } from "@mui/material";
import reactStringReplace from 'react-string-replace';
import { theme } from "styles/MUI_theme";

function getFormedText(note: string) {
  return (
    reactStringReplace(note, /#(\w+)/g, (match, i) => 
      (<Typography component={'span'} sx={{color: 'blue'}} key={i}>#{match} </Typography>)
    )
  )
}

export {getFormedText};
