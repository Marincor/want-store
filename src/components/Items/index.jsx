import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ColorButton } from "./styles";
import styles from "../../styles/Items/Items.module.css";
import { useRouter } from "next/dist/client/router";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Items(props) {
  const router = useRouter();

  const state = useSelector((state) => state);

  function getTotal() {
    let currentTotal = 0;

    state.order.forEach((item) => {
      return (currentTotal += item.total);
    });

    return currentTotal;
  }
  const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

  const notify = () => toast.promise(


    resolveAfter3Sec,
    {
      pending: 'Completing your purchase...',
      success: 'Thank You for Your Purchase!',
      error: 'Something went wrong. Try again...'
    }
)

  

  

  function renderListImage() {
    if (props.item.length > 0) {
      return props.item.map((item) => (
        <ImageListItem key={item._id} className={styles.ImageList}>
          <img
            src={`${ item.metadata?.image?.imageUrl || item.product_main_image_url  }?w=248&fit=crop&auto=format`}
            srcSet={`${item.metadata?.image?.imageUrl || item.product_main_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={() => {
              router.push(`/products/${item.product_id}`);
            }}
          />
          <Typography
            variant="caption"
            component="h3"
            title="item-name"
            color="GrayText"
          >
            {item.product_title.split(" ")[0].toUpperCase()}{" "}
            {item.product_title.split(" ")[1].toUpperCase()}{" "}
            {item.product_title.split(" ")[2].toUpperCase()}
          </Typography>
          {item.quantity ? (
            <Typography
              title="amount"
              variant="caption"
              fontWeight="bold"
              component="p"
            >
              {item.quantity}{" "}
            </Typography>
          ) : (
            false
          )}
          <div className={styles.container}>
         
            <ToastContainer />
          
        
            <Typography
              variant="subtitle1"
              component="p"
              title="price"
              fontWeight="bold"
            >
              $ {item.total || item.sale_price}
            </Typography>

            {props.delete ? (
              <Button
                variant="text"
                color="error"
                title="delete"
                size="small"
                onClick={() => {
                  props.removeToTheCart(item.id);
                }}
              >
                <DeleteOutlineIcon />{" "}
              </Button>
            ) : (
              <ColorButton
                variant="contained"
                onClick={() => {
                  router.push(`/products/${item.product_id}`);
                }}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                show more
              </ColorButton>
            )}
          </div>
        </ImageListItem>
      ));
    }
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "86vh",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "2rem",
      }}
    >
       
      {props.cart ? (
        <Typography variant="h4" component="h2" fontFamily="monospace">
          Your Purchase
        </Typography>
      ) : (
        <Typography variant="h4" component="h2" fontFamily="monospace">
          Products
        </Typography>
      )}
      <ImageList variant="standard" cols={props.cart ? 2 : 3} gap={8}>
        {renderListImage()}
      </ImageList>
      {props.cart ? (
        <>
    
          <Typography variant="h4" component="h2">
            {" "}
            Total
          </Typography>
          <Typography variant="h5" component="h2">
            $ {getTotal()}
          </Typography>
          <Button color="success" onClick={notify}>
            Pay <PaymentIcon />
          </Button>
        </>
      ) : (
        false
      )}
    </Box>
  );
}
