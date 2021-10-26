import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledBadge } from "./style";




 export default function Cart() {

 

  return (
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={1} color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}


