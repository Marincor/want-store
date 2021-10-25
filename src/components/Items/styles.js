import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { lightGreen } from '@mui/material/colors';
import { fontSize } from '@mui/system';

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
    fontFamily: "monospace",
    fontSize: "0.8rem",
    

  
  }));