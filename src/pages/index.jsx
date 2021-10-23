
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  className={styles.container}>
      <Head>
        <title>Desire</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={styles.body}> 
        <Header />
    
      
            <Banner />

    
      
        </body>
        
    </div>
  )
}
