import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Script from 'next/script'

export default function Home({ userData }) {
  return (
    <>
      <Head>
        <title>Bevon's Portfolio</title>
        <meta name="description" content="This site contains information about the authors work and experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      {/* Navigation Bar */}
      <Navigation userData={userData} />
      {/* The flexible grid (content) */}
      <div className={styles.row}>
        <Skills />
        <Projects />
      </div>
      {/* Footer */}
      <Footer />
      {/* Copyright */}
      <Copyright/>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/Bevon");
  if (!res.ok) {
    throw new Error("Resource not found");
  }
  const userData = await res.json();
  
  return {
    props: {userData} ,
  };
}
