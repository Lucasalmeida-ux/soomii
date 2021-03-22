import Head from 'next/head'
import Layout from '../components/layout/layout'

export default function faq() {

    return (
        <>
            <Head>
                <title>F.A.Q</title>
            </Head>
            <Layout>
                <h1 className="title">Perguntas Frequentes</h1>
                <h2 className="subtitle">não encontrou o que deseja ? fale conosco através do e-mail hi@soomi.website</h2>
            </Layout>

        </>
    )
}