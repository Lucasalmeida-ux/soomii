import Head from 'next/head'
import Layout from '../components/layout/layout'
import Hero from '../components/hero'


export default function Home() {
  return (
    <div>
    <Head>
      <title>Soomi - Performance, SEO, Desenvolvimento Web</title>
      <link rel="icon" href="/favico.ico" />
    </Head>
      <Layout>
        <Hero 
        title={<>Que tal uma <br />Renda Extra ?</>}
        desc={
        <>
          Construa um patrimômio financeiro com Marketing <br /> 
          Multinível e receba mensalmente uma renda que <br /> 
          cresce todos os dias.
        </>
          }
        ></Hero>
      </Layout>
      
    </div>
  )
}
