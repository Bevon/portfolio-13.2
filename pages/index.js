import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Next from '../public/next.svg'

export default function Home({ data }) {
  // const bioData = {
  //   name : "Bevon Ochieng",
  //   photo: Next,
  //   bio: 'Some Random Text to work with',
  //   public_repos: 7,
  //   location: 'Kisumu' 
  // }
  // data = bioData
  return (
    <>
      <Head>
        <title>Bevon Ochieng's Portfolio</title>
        <meta name="description" content="This is a Portfolio website, therefore, not quite informative. Sorry.." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navigation Bar */}
      <Navigation data={data} />
      {/* The flexible grid (content) */}
      <div className={styles.row}>
        <Skills />
        <Projects />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Bevon");
  if (!res.ok) {
    throw new Error("Resource not found");
  }
  const data = await res.json();
  return {
    props: { data },
  };
}
