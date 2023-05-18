import styles from "@/styles/Home.module.css";
import Logo from "../public/nep1.png";
import Link from "next/link";
import { Twitter, Linkedin, GitHub, Twitch, Instagram } from "react-feather";
import Image from "next/image";
import Contact from "./contact";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div>
          <div className={styles.aboutSite}>
            <h3>Rubric</h3>
            <Image src={Logo} alt="Site Logo" width={256} loading="lazy"/>
            <p>
              This is a child container.This is a child container. This is a
              child container.This is a child container.This is a child
              container
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.aboutSite}>
            <h3>Useful Links</h3>
            <div className={styles.usefulLink}>
              <div className={styles.icons}>
                <Link href="/">
                  <GitHub />
                </Link>
              </div>
              <div>
                <a>Github Repositories</a>
              </div>
            </div>
            <div className={styles.usefulLink}>
              <div className={styles.icons}>
                <Link href="/">
                  <Twitter />
                </Link>
              </div>
              <div>
                <Link href="/">Follow me on twitter</Link>
              </div>
            </div>
            <div className={styles.usefulLink}>
              <div className={styles.icons}>
                <Link href="/">
                  <Linkedin />
                </Link>
              </div>
              <div>
                <Link href="/">Follow me on Linkedin</Link>
              </div>
            </div>
            <div className={styles.usefulLink}>
              <div className={styles.icons}>
                <Link href="/">
                  <Twitch />
                </Link>
              </div>
              <div>
                <Link href="/">Follow me on Twitch</Link>
              </div>
            </div>
            <div className={styles.usefulLink}>
              <div className={styles.icons}>
                <Link href="/">
                  <Instagram />
                </Link>
              </div>
              <div>
                <Link href="/">Follow me on Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.aboutSite}>
            <h3>Contact Me</h3>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
