import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import getItems from "../../services/api";


export default function Items() {

    const [itemData, setItemData] = useState([])

    useEffect(()=>{


        try {
            getItems().then(data => {
                
                setItemData(data.docs); 
                console.log(data)
                
            })

        }
        catch(error) {

            console.log(error)
        }
        finally{

            console.log("finish")
        }
    }, [])


    function renderListImage() {


        if(itemData.length > 0) {

            return(
                itemData.map((item) => (
                    <ImageListItem key={item._id}>
                      <img
                        src={`${item.product_main_image_url}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.product_main_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
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
        <Typography variant="h4" component="h2" fontFamily="monospace">Products</Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {renderListImage()}
      </ImageList>
    </Box>
  );
}

