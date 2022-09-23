import '../styles/globals.css'
import {AuthProvider} from '../contexts/auth'
import Layout from '../components/Layout'
import {useState} from 'react'
import Script from "next/script";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    const [question, setQuestion] = useState({'title': "@@@@@"})

    return (
        <>
            <AuthProvider>
                <Layout>
                    <Head>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                              rel="stylesheet"
                              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                              crossOrigin="anonymous"
                        />
                    </Head>
                    <Script
                        id="bootstrap-cdn"
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>

                    <Component {...pageProps} setQuestion={setQuestion} question={question}/>
                </Layout>
            </AuthProvider>
        </>
    )
}

export default MyApp
