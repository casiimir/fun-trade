import styles from "@/styles/iscriviti.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

//Image
import google from "@/assets/7611770.png";
import facebook from "@/assets/facebook.png";
import logo from "@/assets/iconsProject/logo.svg";

//Mocks
import users from "@/mock/usersMock.js";

export default function iscriviti() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onHandleName = (e) => {
		setName(e.target.value);
	};

	const onHandleEmail = (e) => {
		setEmail(e.target.value);
	};

	const onHandlePassword = (e) => {
		setPassword(e.target.value);
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		users.push({
			username: name,
			email: email,
			password: password,
		});
		router.push("/");
	};
	return (
		<>
			<Head>
				<title>iscriviti</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.iscriviti}>
				<Image
					src={logo}
					alt="logo"
					width={150}
					height={150}
					className={styles.iscriviti__logo}
				/>
				<div className={styles.iscriviti__header}>
					<p className={styles.iscriviti__header__arrow}>⬅</p>
					<h3 className={styles.iscriviti__header__title}>Login Page</h3>
				</div>
				<div className={styles.iscriviti__wrap}>
					<h2 className={styles.iscriviti__wrap__title}>Iscriviti</h2>
					<form
						className={styles.iscriviti__wrap__form}
						onSubmit={onHandleSubmit}
					>
						<div className={styles.iscriviti__wrap__form__name}>
							<label
								for="name"
								className={styles.iscriviti__wrap__form__name__label}
							>
								User Name
							</label>
							<input
								type="text"
								name="name"
								value={name}
								onChange={onHandleName}
								placeholder="Inserisci il tuo nome"
								required
								className={styles.iscriviti__wrap__form__name__input}
							/>
						</div>
						<div className={styles.iscriviti__wrap__form__email}>
							<label
								for="email"
								className={styles.iscriviti__wrap__form__email__label}
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
								className={styles.iscriviti__wrap__form__email__input}
							/>
						</div>
						<div className={styles.iscriviti__wrap__form__password}>
							<label
								for="password"
								className={styles.iscriviti__wrap__form__password__label}
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
								className={styles.iscriviti__wrap__form__password__input}
							/>
						</div>
						<div className={styles.iscriviti__wrap__form__terms}>
							<input
								type="checkbox"
								name="terms"
								required
								className={styles.iscriviti__wrap__form__terms__check}
							/>
							<label
								htmlFor="terms"
								className={styles.iscriviti__wrap__form__terms__label}
							>
								Accetto i termini e le condizioni di Funtrade
							</label>
						</div>
						<div className={styles.iscriviti__wrap__form__privacy}>
							<input
								type="checkbox"
								name="privacy"
								required
								className={styles.iscriviti__wrap__form__privacy__check}
							/>
							<label
								htmlFor="privacy"
								className={styles.iscriviti__wrap__form__privacy__label}
							>
								Prendo atto che le mie informazioni saranno utilizzate in
								conformità con l'informativa sulla privacy e cookie
							</label>
						</div>
						<input
							type="submit"
							name="submit"
							value="Registrati"
							className={styles.iscriviti__wrap__form__submit}
						/>
					</form>
					<div className={styles.iscriviti__wrap__link}>
						<div className={styles.iscriviti__wrap__link__title}>
							<h3 className={styles.iscriviti__wrap__link__title__h3}>
								Oppure iscriviti con
							</h3>
						</div>
						<div className={styles.iscriviti__wrap__link__icons}>
							<Image src={google} alt="logo google" width={50} height={50} />
							<Image src={facebook} alt="logo google" width={50} height={50} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
