import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const HomeLayout = ({ children }) => {
    return (
        <div className='h-full'>
            <Head>
                <title>Paper</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Paper" />
            </Head>
            <section className="min-h-screen flex flex-col justify-between">
                <section className='h-full min-h-screen flex-1'>
                    <nav className="">
                        <Navbar />
                    </nav>
                    <main className='h-full min-h-[50vh]'>{children}</main>
                </section>
                <section className='h-full'>
                    <Footer />
                </section>
            </section>
        </div>
    )
}

export default HomeLayout