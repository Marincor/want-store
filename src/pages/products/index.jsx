
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import itemsStore from "../../components/actions/dataItem";
import Header from "../../components/Header";
import Items from "../../components/Items";
import LoadingAnimation from "../../components/LoadingAnimation";


export function getStaticProps () {

    
 

  

  return {

    revalidate: 86400,
    props: {
      content: "Products Page",
     
    }
  }
}

export default function Products(props) {

  const state = useSelector((state) => state);

console.log(props.content)

useEffect(()=>{

  itemsStore();
})


  return (
    <>
      <Head>
        <title>I Want - Products</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <body>
        <Header />
        
        {state.loading ? (
          <>
           <LoadingAnimation />
          </>
        ) : (
          <Items item={state?.items} />
        )}
      </body>
    </>
  );
}
