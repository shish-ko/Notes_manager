import { INote } from "interfaces";
import { Hashtag } from "./Hashtag";
import React from "react";
import { Divider, List } from "@mui/material";

export const HashtagList: React.FC<Pick<INote, 'hashTags'>> = ({ hashTags }) => {
  return (
    <List disablePadding sx={{display: 'flex', flexWrap: 'wrap'}}>
      {hashTags.map((hashtag, i) => {
        if (i === hashTags.length - 1) {
          return <Hashtag hashtag={hashtag} key={i} />
        }
        return (
          <React.Fragment key={i}>
            <Hashtag hashtag={hashtag} />
            <Divider orientation="vertical" flexItem />
          </React.Fragment>
        )
      })}
    </List>
  )


}