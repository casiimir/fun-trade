import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Sidebar.module.scss";
import { UserContext } from "@/pages/_app";
// icons
import profileIcon from "../../mock/profile-icon.svg";
import homeIcon from "../../assets/iconsProject/home.svg";
import favoriteIcon from "../../assets/iconsProject/heart.svg";
import academyIcon from "../../assets/iconsProject/school.svg";
import logoIcon from "../../assets/iconsProject/logo.svg";
import logoutIcon from "../../assets/iconsProject/logout.svg";
import walletIcon from "../../assets/iconsProject/wallet.svg";
import TeamIcon from "../../assets/iconsProject/teamImg/TeamIcon.svg";
//Firebase
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const Sidebar = () => {
	const { isSearchOpen, setIsSearchOpen, selectedPage, setSelectedPage } =
		useContext(UserContext);
	const router = useRouter();
	const [userData, setUserData] = useState({});

	const onHandleLogout = () => {
		router.push("/");
		signOut(auth).then((res) => {
			console.log(res);
		});
	};

	const onHandleClickSidebar = () => {
		if (isSearchOpen) setIsSearchOpen((prev) => !prev);
	};

	const onHandleSelect = (e) => setSelectedPage(e.currentTarget.id);

	useEffect(() => {
		let userData = JSON.parse(localStorage.getItem("UserData")) || {};
		setUserData(userData);
	}, []);

	return (
		<section className={styles.Sidebar} onClick={onHandleClickSidebar}>
			<div className={styles.wrapper}>
				<div className={styles.icon}>
					<Image src={logoIcon} alt="logo" width={60} height={60} />
				</div>
				<div className={styles.fadein}>
					<h2 className={`${styles.title} ${styles.label}`}>funtrade</h2>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.icon}>
						<Image
							src={userData ? userData.avatar : profileIcon}
							alt="profile"
							width={60}
							height={60}
						/>
					</div>
					<div className={`${styles.profileText} ${styles.fadein}`}>
						<p className={`${styles.profileText__name} ${styles.label}`}>
							{userData ? userData.username : "user"}
						</p>
						<p className={`${styles.profileText__accountType} ${styles.label}`}>
							Premium account
						</p>
					</div>
				</div>
				<ul className={styles.menuList}>
					<Link href="/homepage">
						<li
							id="homepage"
							className={`${styles.menuList__wrapper} ${
								selectedPage === "homepage" && styles.selected
							}`}
							onClick={onHandleSelect}
						>
							<div className={styles.icon}>
								<Image src={homeIcon} alt="home" width={35} height={35} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>Home</p>
							</div>
						</li>
					</Link>
					<Link href="/profile">
						<li
							id="profile"
							className={`${styles.menuList__wrapper} ${
								selectedPage === "profile" && styles.selected
							}`}
							onClick={onHandleSelect}
						>
							<div className={styles.icon}>
								<Image src={walletIcon} alt="wallet" width={35} height={35} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>wallet</p>
							</div>
						</li>
					</Link>
					<Link href="/funAcademy">
						<li
							id="funAcademy"
							className={`${styles.menuList__wrapper} ${
								selectedPage === "funAcademy" && styles.selected
							}`}
							onClick={onHandleSelect}
						>
							<div className={styles.icon}>
								<Image
									src={academyIcon}
									alt="FunAcademy"
									width={35}
									height={35}
								/>
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>
									Fun Academy
								</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li
							id="favorites"
							className={`${styles.menuList__wrapper} ${
								selectedPage === "#" && styles.selected
							}`}
							onClick={onHandleSelect}
						>
							<div className={styles.icon}>
								<Image
									src={favoriteIcon}
									alt="favorites"
									width={35}
									height={35}
								/>
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>favorites</p>
							</div>
						</li>
					</Link>
					<Link href="/about">
						<li
							id="aboutus"
							className={`${styles.menuList__wrapper} ${
								selectedPage === "aboutus" && styles.selected
							}`}
							onClick={onHandleSelect}
						>
							<div className={styles.icon}>
								<Image src={TeamIcon} alt="about us" width={35} height={35} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>about us</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li className={styles.menuList__wrapper} onClick={onHandleLogout}>
							<div className={styles.icon}>
								<Image src={logoutIcon} alt="logout" width={35} height={35} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>logout</p>
							</div>
						</li>
					</Link>
				</ul>
			</div>
		</section>
	);
};
export default Sidebar;
