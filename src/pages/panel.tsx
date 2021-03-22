import Head from 'next/head'
import LayoutP from '../components/layout/layoutP'
var QRCode = require('qrcode.react');

export default function Panel() {

    return (
        <>
            <Head>
                <title>Painel Administrativo</title>
            </Head>
            <LayoutP>
               <QRCode value="https://soomii.website/" size="500" fgColor="#2bb18b" className="w-full md:w-max p-3 md:p-10" />
               <h2 className="bg-green-50 text-green-800 uppercase font-semibold text-sm">link de Afiliado:<span>https://soomii.website/convite/lucas</span></h2>
            </LayoutP>

        </>
    )
}