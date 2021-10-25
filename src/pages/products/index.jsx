import Head from "next/head";
import { useEffect, useState } from "react";
import Header from '../../components/Header'
import Items from "../../components/Items";
import getItems from '../../services/api'

export default function Products() {
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




    return (
      <div>
        <Head>
          <title>I Wanna - Products</title>
          <meta name="description" content="Make a wish, get your desire!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <body >
          <Header />
            <Items item={itemData} />
     
        </body>
      </div>
    );
  }
  