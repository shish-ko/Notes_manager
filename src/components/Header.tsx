import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "styles/MUI_theme";

const {palette} = theme;
export const Header: React.FC = () => {
  return (
    <Box sx={{pt: 2, pb: 2, color: 'white'}} bgcolor={palette.primary.main}>
      <Container> 
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h1">Super-mega-note-manager</Typography>
          <Button variant={'contained'} color="secondary" size="small"> remove all notes</Button>
        </Stack>
        
        </Container>
    </Box>
  )
}