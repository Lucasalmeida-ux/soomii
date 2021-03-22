import Head from 'next/head'
import Layout from '../components/layout/layout'
import { useForm } from "react-hook-form";

export default function Cadastro() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            <Head>
                <title>Soomi - Cadastro</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <h1 className="title">Cadastre-se</h1>
                <h2>Cadastre-se para ser nosso afiliado</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="example" defaultValue="test" ref={register} />
                    <input name="exampleRequired" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>

            </Layout>

        </div>
    )
}
