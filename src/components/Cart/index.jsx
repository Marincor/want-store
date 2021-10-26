import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledBadge } from "./style";
import { useSelector } from "react-redux";




 export default function Cart() {

  const state = useSelector(state => state);


  return (
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={state.orderAmount} color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}


