import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Event App | Home',
  description: 'Find the lastest events happening.',
  keywords: 'music , dance, art, dj'
}

export default Layout