import Head from 'next/head'

import Menu from '../components/menu/menu'

export default function DefaultLayout({ children, activeMenuTitle }) {
    return (
        <div className="container">
            <Head>
                <title>TableTop Catalog Demo WebApp</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Menu activeTitle={ activeMenuTitle }>
                </Menu>
            </header>

            <main>
                { children }
            </main>

            <footer>

            </footer>
        </div>
    );
}