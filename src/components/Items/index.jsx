import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ColorButton } from "./styles";
import styles from '../../styles/Items/Items.module.css'
import { useRouter } from "next/dist/client/router";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Items(props) {

 const router = useRouter();

    function renderListImage() {


        if(props.item.length > 0) {

            return(
                props.item.map((item) => (
                  
                    <ImageListItem key={item._id} className={styles.ImageList} >
                      <img
                        src={`${item.product_main_image_url}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.product_main_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <Typography variant="caption" component="h3" color="GrayText">{item.product_title.split(" ")[0].toUpperCase()} {item.product_title.split(" ")[1].toUpperCase()} {item.product_title.split(" ")[2].toUpperCase()}</Typography>
                      {item.quantity? <Typography>{item.quantity} </Typography> : false}
                      <div className={styles.container}>
                      <Typography variant="subtitle1" component="p" fontWeight="bold">$ {item.total||item.sale_price}</Typography>

                      {
                        props.delete? <ColorButton size="small"><DeleteOutlineIcon/> </ColorButton> : (<ColorButton variant="contained"  onClick={()=>{ router.push(`/products/${item.product_id}`)}}  sx={{ display: { xs: "none", sm: "block" } }}>show more</ColorButton>)
                      }
                      
                        </div>
                    </ImageListItem>
                  ))
            )
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
        {props.cart? <Typography variant="h4" component="h2" fontFamily="monospace">Your Purchase</Typography>:
      <Typography variant="h4" component="h2" fontFamily="monospace">Products</Typography>        
        }
      <ImageList variant="masonry" cols={3} gap={8}>
        {renderListImage()}
      </ImageList>
    </Box>
  );
}

