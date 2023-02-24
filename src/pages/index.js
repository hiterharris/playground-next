import Head from 'next/head';
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <h1>Next Playground</h1>
        <nav>
          <Link href="/store">
            <h4>Store</h4>
          </Link>
        </nav>
      </main>
    </>
  )
}

export default Home;