import { Box, Container, Divider, List, ListItemText, Stack } from "@mui/material";
import React from "react";
import { theme } from "styles/MUI_theme";

const {palette} = theme;
export const Footer: React.FC = () => {
  return (
    <Box sx={{pt: 2, pb: 2, color: 'white'}} bgcolor={palette.primary.main}>
      <Container> 
        <Stack direction={'row'} justifyContent={'space-between'}>
          <List>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
          </List>
          <Divider orientation="vertical" flexItem/>
          <List>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
          </List>
          <Divider orientation="vertical" flexItem/>
          <List>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
          </List>
          <Divider orientation="vertical" flexItem/>
          <List>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
            <ListItemText>Lorem ipsum </ListItemText>
          </List>
        </Stack>
        
        </Container>
    </Box>
  )
}