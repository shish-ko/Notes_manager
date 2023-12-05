import { ListItemButton} from "@mui/material";
import { searchByHashtag } from "store/store";
import { theme } from "styles/MUI_theme";
import { useAppDispatch } from "~utils/customHooks"

interface IHashtagProps {
  hashtag: string,
}
export const Hashtag: React.FC<IHashtagProps> = ({hashtag}) => {
  const dispatch = useAppDispatch();

  const searchHandler = () => {
    dispatch(searchByHashtag(hashtag))
  }
  return <ListItemButton  onClick={searchHandler} sx={{padding: `0 ${theme.spacing(1)}`, cursor: 'pointer', color: theme.palette.primary.light, flexGrow: 'unset'}}>{hashtag} </ListItemButton>
}