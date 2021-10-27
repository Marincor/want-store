import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledBadge } from "./style";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { store } from "../../store";




 export default function Cart() {

  const state = useSelector(state => state);

  useEffect(()=>{

    let count = 0;

    state.order.forEach((item) =>{

      return count += item.quantity

    })


    store.dispatch({

      type: "SET_AMOUNT_ORDER",
      payload: count
    })
  })

  console.log(state)

  return (
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={state.orderAmount} color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}


