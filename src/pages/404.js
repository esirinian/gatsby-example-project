import React from 'react'
import { Link } from 'gatsby'

import styles from '../css/error.module.css'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default function error() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="Oops it's dead end">
                    <Link to="/" className="btn-white">
                        Back to Home Page
                </Link>
                </Banner>
            </header>
        </Layout>
    )
}
