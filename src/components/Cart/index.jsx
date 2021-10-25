import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledBadge } from "./style";
import {  connect, useSelector } from "react-redux";
import { store } from "../../store";


 export default function Cart() {

  const state = useSelector((state) => state);

  console.log(state)

  function handleChange() {

 

    store.dispatch({

      type: "ADD_TASK",
      payload: "olá mundo"

    })
  }

  return (
    <IconButton aria-label="cart" onClick={handleChange}>
      <StyledBadge badgeContent={1} color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}


