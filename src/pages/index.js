import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

//Firebase
import { getData, authGoogle, authGit, auth } from "@/firebase";

//Image
import google from "@/assets/7611770.png";
import github from "@/assets/github.png";
import logo from "@/assets/iconsProject/logo.svg";

export default function Home({ data }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  /**
   * Email Authentication
   * @date 27/7/2023 - 22:33:48
   *
   * @param {*} e
   */
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const userFindDB = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password.toLowerCase() === password.toLowerCase()
    );
    if (userFindDB) {
      router.push("/homepage");
    } else {
      alert("incorrect email or password");
    }
  };

  /**
   * Google Authentication
   * takes the user data from the authentication call and sets the global variable: userData with the data contained in the user object
   */
  const onHandleGoogle = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        authGoogle().then((res) => {
          router.push("/homepage");
        });
      } else {
        onAuthStateChanged(auth, (user) => {
          router.push("/homepage");
        });
      }
    });
  };

  /**
   * GitHub Authentication
   * takes the user data from the authentication call and sets the global variable: userData with the data contained in the user object
   */
  const onHandleGit = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        authGit().then((res) => {
          router.push("/homepage");
        });
      } else {
        onAuthStateChanged(auth, (user) => {
          router.push("/homepage");
        });
      }
    });
  };

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <>
      <Head>
        <title>Fan Trade/Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/icon" href="/public/favicon/favicon.ico" />
        {/* <link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" /> */}
      </Head>
      <main className={styles.main}>
        <div className={styles.main__header}>
          <Image src={logo} alt="logo" width={70} height={70} />
          <h1 className={styles.main__header__title}>Funtrade</h1>
        </div>
        <div className={styles.main__login}>
          <h2 className={styles.main__login__title}>Accedi</h2>
          <form className={styles.main__login__form} onSubmit={onHandleSubmit}>
            <div className={styles.main__login__form__email}>
              <label
                htmlFor="email"
                className={styles.main__login__form__email__label}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onHandleEmail}
                placeholder="Inserisci la tua email"
                required
                className={styles.main__login__form__email__input}
              />
            </div>
            <div className={styles.main__login__form__password}>
              <label
                htmlFor="password"
                className={styles.main__login__form__password__label}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onHandlePassword}
                placeholder="**********"
                required
                className={styles.main__login__form__password__input}
              />
            </div>
            <input
              type="submit"
              name="submit"
              value="Accedi"
              className={styles.main__login__form__submit}
            />
          </form>
          <div className={styles.main__login__link}>
            <div className={styles.main__login__link__title}>
              <h3 className={styles.main__login__link__title__h3}>
                Oppure accedi con
              </h3>
            </div>
            <div className={styles.main__login__link__icons}>
              <Image
                src={google}
                alt="logo google"
                width={50}
                height={50}
                onClick={onHandleGoogle}
                className={styles.main__login__link__icons__google}
              />
              <Image
                src={github}
                alt="logo github"
                width={40}
                height={40}
                onClick={onHandleGit}
              />
            </div>
          </div>
          <div className={styles.main__login__sing_in}>
            <div className={styles.main__login__sing_in__title}>
              <h3 className={styles.main__login__sing_in__title__h3}>
                Non possiedi un account?
              </h3>
            </div>
            <button className={styles.main__login__sing_in__btn}>
              <Link href="/iscriviti"> Iscriviti </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * Server side render
 * @date 27/7/2023 - 22:34:40
 * return a list of DB users
 * @export
 * @async
 * @param {*} context
 * @returns {Array}
 */
export async function getServerSideProps(context) {
  const data = await getData();

  return {
    props: {
      data,
    },
  };
}
