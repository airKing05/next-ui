import '../styles/globals.css';
import Head from 'next/Head';
import ThemeButton from '../components/darkTheme/ThemeButton';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';


function MyApp({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        //  bootstrap CDN
        <title>Krashak</title>
        <script src="https://kit.fontawesome.com/41805cbb76.js" crossOrigin="anonymous"></script>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"></script>
      </Head>

      {/* <ThemeButton /> */}
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

    </Provider>
  )

}

export default MyApp
