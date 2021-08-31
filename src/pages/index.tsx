import styled from "styled-components";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Audio Hooks</title>
      </Head>
      <StyledGrid>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ol className={styles.orderedList}>
              <li><a href="#get-started">get started</a></li>
              <li><a href="#get-started">documentation</a></li>
              <li><a href="#get-started">demos</a></li>
              <li><a href="#get-started">faqs</a></li>
            </ol>
          </nav>
        </header>

        <div className={styles.intro}>
          <h4>This is a react hook library that gives you everything you need to create a custom audio player.</h4>
          <p>Text</p>
        </div>

      </StyledGrid>
    </>
  )
}

const StyledGrid = styled.div`

`;