import Button from '@mui/material/Button';
import { blueGrey, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    fontFamily: "monospace"
  }));