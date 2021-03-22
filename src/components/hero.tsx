import Image from 'next/image'

export default function Hero(props) {

    return (
        <div className="py-10 md:py-20 md:bg-bg-hero bg-no-repeat bg-right-bottom">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle text-lg md:text-3xl mt-3 md:leading-10">
                {props.desc}
            </h2>
        </div>
    )
}