import Image from 'next/image'
import Navbar from '../components/Navbar';
import Head from 'next/Head';
import Footer from '../components/footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Brand</title>
        <meta name="google" content="nositelinkssearchbox" />
      </Head>
      <Navbar />

      <div className="container mt-5 text-center" style={{ background: '#555555' }}>
        <h1>Website for the indian Krashak</h1>
        <Image src="https://cdn.pixabay.com/photo/2014/09/09/19/07/corn-field-440338_960_720.jpg" width="500" height="300"></Image>
        <img src="https://cdn.pixabay.com/photo/2020/10/09/20/30/pumpkins-5641482__340.jpg"></img>
      </div>

      <Footer/>
    </div>
  )
}
