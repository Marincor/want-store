import styles from '../styles/Page404/Page404.module.css'
import Head from 'next/dist/shared/lib/head';
import { Button, Typography } from '@mui/material';
import ErrorAnimation from '../components/Page404Animation';
import { useRouter } from 'next/dist/client/router';
import HomeIcon from '@mui/icons-material/Home';

export function getStaticProps() {


    return { props: {  content: "Page 404" } }
  
  
  }
  
  
  export default function Page404(props) {
  
  console.log(props.content)

  const router = useRouter()
  
    return (
      <div className={styles.container}>
        <Head>
          <title>404 - Error</title>
          <meta name="description" content="Make a wish, get your desire!" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
  
        <body className={styles.body}>
            <ErrorAnimation />
            <Button color="error" variant="outlined"  onClick={() =>{ router.push("/")}}> Home <HomeIcon /></Button>
         
        </body>
      </div>
    );
  }
  