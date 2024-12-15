import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Paper</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Paper" />
            </Head>
            <section className="min-h-screen flex flex-col justify-between">
                <section>
                    <nav className="h-20">
                        <Navbar />
                    </nav>
                    <main>{children}</main>
                </section>
                <section>
                    <Footer />
                </section>
            </section>
        </div>
    )
}

export default HomeLayout