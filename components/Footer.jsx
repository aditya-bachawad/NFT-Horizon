/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/Footer.module.css';
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  const open = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.container}>
      <p className={styles.credit}>
        Designed by{' '}
        <a href='https://www.linkedin.com/in/' target='_blank' rel='noreferrer'>
          Jagruit Dole
        </a>{' '}
      </p>
      <div className={styles.socials}>
        <span>
          <FaLinkedinIn
            className={styles.icon}
            onClick={() =>
              open('https://www.linkedin.com/in/aditya-bachawad-a71666209/')
            }
          />
          {/* <AiFillGithub
            className={styles.icon}
            onClick={() => open("https://github.com/harshpandey002/openriver")}
          /> */}
          <FaTwitter
            className={styles.icon}
            onClick={() => open('https://twitter.com/aditya_bachawad')}
          />
          {/* <AiFillInstagram
            className={styles.icon}
            onClick={() => open("https://www.instagram.com/harshpandey_002/")}
          /> */}
        </span>
        <a
          href='https://blog.aditya-bachawad.me'
          target='_blank'
          rel='noreferrer'
        >
          blog.aditya-bachawad.me
        </a>
      </div>
      <div className={styles.logo}>
        <img src='https://i.imgur.com/UhzOw1n.png' alt='logo' />
        <h2>OpenRiver</h2>
      </div>
    </div>
  );
}
