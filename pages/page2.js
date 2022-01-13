import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';





export default function Page() {
    return <div className={styles.container}>
        <Head>
            <title>Lucy de Rojas page 2</title>
        </Head>
<h1>Page 2</h1>
<p>some para</p>

<Link href="/"><a>Home Page</a></Link>


    </div>
}










