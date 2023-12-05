import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { resetSearch } from "store/store";
import { theme } from "styles/MUI_theme";
import { useAppDispatch, useAppSelector } from "~utils/customHooks";

const {palette} = theme;
export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const {searchHashtags} = useAppSelector((state)=> state.noteStore)

  return (
    <Box sx={{pt: 2, pb: 2, color: 'white'}} bgcolor={palette.primary.main}>
      <Container> 
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h1">Super-mega-note-manager</Typography>
          <Button disabled={!searchHashtags.length} variant={'contained'} color="secondary" size="small" onClick={()=> {dispatch(resetSearch())}}> Reset filters</Button>
        </Stack>
        
        </Container>
    </Box>
  )
}