import { store } from "../../../../store/";

export function removeToTheCart2(state, id) {
  const arr = state.order || [];

  const newArr = arr.filter( (item) => {

        return item.id !== id
  });

 
  const quantityToCart = () => {
    let count = 0;
    state.order.forEach((item) => {
      return (count += item.quantity);
    });

    return count;
  };



  const alreadyOnTheCart = state.order.find((item) => item.id === id);

  if (alreadyOnTheCart.quantity < 2 && state.order.length === 0) {

    window.localStorage.setItem("CURRENT_ORDER", JSON.stringify(newArr))
    store.dispatch({
      type: "CURRENT_ORDER",
      payload: newArr,
    });
    store.dispatch({
        type: "SET_AMOUNT_ORDER",
        payload: 0
      });
  }  else if(alreadyOnTheCart.quantity < 2 && state.order.length > 0) {
    window.localStorage.setItem("CURRENT_ORDER", JSON.stringify(newArr))
    store.dispatch({
        type: "CURRENT_ORDER",
        payload: newArr,
      });
      store.dispatch({
          type: "SET_AMOUNT_ORDER",
          payload: state.orderAmount - 1
        });
  }
  else {
    console.log('tres')

    alreadyOnTheCart.quantity -= 1;
    alreadyOnTheCart.total = alreadyOnTheCart.quantity * alreadyOnTheCart.price;

    window.localStorage.setItem("CURRENT_ORDER", JSON.stringify(state.order))
    store.dispatch({
      type: "SET_AMOUNT_ORDER",
      payload: quantityToCart(),
    });
  }
}
