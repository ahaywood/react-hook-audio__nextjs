import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { StyledGrid, StyledFooter } from "../styles/HomeStyles"
import { CodeBlock } from "../components/CodeBlock";
import { Faq } from "../components/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Audio Hooks</title>
      </Head>
      <StyledGrid>
        <header>
          <h1>
            React
            <br />
            Hook
            <br />
            Audio
          </h1>
          <nav>
            <ol>
              <li><a href="#get-started">get started</a></li>
              <li><a href="#get-started">documentation</a></li>
              <li><a href="#get-started">demos</a></li>
              <li><a href="#get-started">faqs</a></li>
            </ol>
          </nav>
          <div className="octocat">
            <Image src="/images/github-corner.svg" height={108} width={108} alt="GitHub Octocat" />
          </div>
        </header>

        <div className="intro">
          <h4>This is a react hook library that gives you everything you need to create a custom audio player.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <aside className="aside">
          <h4>get started</h4>
          <ul>
            <li>installation</li>
            <li>dependencies</li>
            <li>quick start</li>
          </ul>
        </aside>

        <div className="content">
          <h2>get started</h2>
          <h3>installation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          {/* <CodeBlock>
            <p>Hello!</p>
          </CodeBlock> */}

          <Faq />
          <Faq />
          <Faq />

        </div>

      </StyledGrid>
      <StyledFooter>
        <>
          <p>Copyright &copy; 2021. <a href="http://ahhacreative.com" target="_blank" rel="noreferrer">Ah Ha Creative, LLC</a>. All Rights Reserved.</p>
          <div className="hosted-on">
            <div className="hosted-on__text">Hosted on</div>
            <Image src="/images/vercel.svg" width={97} height={22} alt="Vercel" />
          </div>
        </>
      </StyledFooter>
    </>
  );
}