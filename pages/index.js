import Head from 'next/Head';
import Navbar from '../components/Navbar';
import HomePage from '../components/home';
import Footer from '../components/footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Dekho Krashak</title>
        <meta name="google" content="nositelinkssearchbox" />
      </Head>
      <HomePage/>
    </div>
  )
}
