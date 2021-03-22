import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

function Menu() {
    const [menuState, setMenuState] = useState(false)

    const handleClickMenu = () => {
        setMenuState(!menuState)
    }
    return (
        <>
        <button onClick={handleClickMenu} className="lg:hidden float-right outline-none focus:outline-none ml-3 p-3 rounded-md text-gray-500 bg-yellow-50 hover:bg-yellow-100"><GiHamburgerMenu /></button>
        <div className="float-right mt-1">
            <div className="float-right">
                <Link href="/cadastro"><a className="p-1 lg:p-3 px-2 lg:px-5 ml-5 rounded-md bg-green-300 text-gray-600 uppercase font-semibold text-xs transition-all duration-300 hover:bg-green-400 hover:shadow-md hover:text-green-900">R$ 1000</a></Link>
                <Link href="/faq"><a className=" text-sm text-green-700 ml-2 lg:ml-3 transition-all duration-300 hover:text-gray-400">Sair</a></Link>
            </div>
        <div className={`${menuState?`block w-full`:`hidden`} lg:inline-block fixed left-0 lg:top-0 top-16 bg-white lg:static divide-y lg:divide-y-0`}>
            <Link href="/faq"><a className="p-2 lg:p-0 lg:pl-6 text-sm transition-all duration-300 hover:text-gray-400 block lg:inline-block">Minha Rede</a></Link>
            <Link href="/faq"><a className="p-2 lg:p-0 lg:pl-6 text-sm transition-all duration-300 hover:text-gray-400 block lg:inline-block">Histórico de Entradas</a></Link>
        </div>
        </div>
        </>
    )
}
function ContactInfo() {
    return (
        <>
            email: hi@soomii.website
        </>
    )
}
function Header() {
    return (
        <header className="pt-3">
                <Link href="/"><Image src="/logo.png" width="100" height="26" className="transition-opacity cursor-pointer hover:opacity-50" /></Link>
                <Menu />
        </header>
    )
}
function Footer() {
    return (
        <>
            <div className="grid grid-col-4">
                <div>
                    <ContactInfo />
                </div>
            </div>
            <div className="text-center mt-10">© 2021 - Todos os direitos reservados</div>
        </>
    )
}

export default function LayoutP({ children }) {
    return (
        <div className="text-gray-800 h-screen p-3 lg:px-10 lg:px-20" >
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}