import Image from "next/image";
import Logo from "../../public/nep1.png";
import styles from "@/styles/Home.module.css";
import DateTime from "./dateTime";
import Link from "next/link";
import { Twitter, Linkedin, GitHub, Twitch, Instagram } from "react-feather";

export default function Navigation({data}) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.siteDate}>
        <DateTime />
      </div>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Image src={Logo} alt="Site Logo" width={256}/>
        </div>
        <div className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.bioCard}>
          <Image
            className={styles.bioImage}
            src={data.avatar_url}
            height={96}
            width={96}
            alt="User Photo"
            priority
          />
          <h5>{data.name}</h5>
          <br />
          <hr />
          <p>{data.bio}</p>
          <br />
          <p>Github Repos: {data.public_repos}</p>
          <p>Location: {data.location}</p>
          <hr />
          <div className={styles.socialIcons}>
            <div className={styles.twitter}>
              <Link href="https://twitter.com/_son_of_morning" target="_blank">
                <Twitter />
              </Link>
            </div>
            <div className={styles.linkedin}>
              <Link
                href="https://www.linkedin.com/in/bevon-ochieng-579008166/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
            <div className={styles.github}>
              <Link href="https://github.com/Bevon" target="_blank">
                <GitHub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
