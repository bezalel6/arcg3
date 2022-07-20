import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Arcg3 (GMKEYSER)</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
      <div class="video-container">
  <video loop controls>
    <source src="./vid.mp4" type="video/mp4" />
  </video>
</div>
      </main>

      <Footer />
    </div>
  )
}
