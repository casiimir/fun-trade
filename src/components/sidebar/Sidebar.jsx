import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styles from "./Sidebar.module.scss";
import { UserContext } from "@/pages/_app";
// icons
import profileIcon from "../../mock/profile-icon.svg";
import homeIcon from "../../assets/iconsProject/home.svg";
import favoriteIcon from "../../assets/iconsProject/heart.svg";
import academyIcon from "../../assets/iconsProject/school.svg";
import settingsIcon from "../../assets/iconsProject/setting.svg";
import logoIcon from "../../assets/iconsProject/logo.svg";
import logoutIcon from "../../assets/iconsProject/logout.svg";
import costumerServiceIcon from "../../assets/iconsProject/costumerService.svg";
import walletIcon from "../../assets/iconsProject/wallet.svg";
import depositIcon from "../../assets/iconsProject/WalletDep&Prel.svg";

const Sidebar = () => {
	const { userData } = useContext(UserContext);

	return (
		<section className={styles.Sidebar}>
			{/* <button onClick={onHandleClick} className={styles.closeBtn}>
        <Image src={closeIcon} alt="close" width={40} height={40} />
      </button> */}
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
							src={userData?.avatar}
							alt="profile"
							width={50}
							height={50}
						/>
					</div>
					<div className={`${styles.profileText} ${styles.fadein}`}>
						<p className={`${styles.profileText__name} ${styles.label}`}>
							{userData?.username}
						</p>
						<p className={`${styles.profileText__accountType} ${styles.label}`}>
							Premium account
						</p>
					</div>
				</div>
				<ul className={styles.menuList}>
					<Link href="/homepage">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image src={homeIcon} alt="home" width={30} height={30} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>Home</p>
							</div>
						</li>
					</Link>
					<Link href="/profile">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image src={walletIcon} alt="wallet" width={30} height={30} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>wallet</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image
									src={favoriteIcon}
									alt="favorites"
									width={30}
									height={30}
								/>
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>favorites</p>
							</div>
						</li>
					</Link>
					<Link href="/funAcademy">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image
									src={academyIcon}
									alt="FunAcademy"
									width={30}
									height={30}
								/>
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>
									FunAcademy
								</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image src={depositIcon} alt="deposit" width={30} height={30} />
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>deposit</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image
									src={settingsIcon}
									alt="settings"
									width={30}
									height={30}
								/>
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>settings</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image
									src={costumerServiceIcon}
									alt="customer service"
									width={30}
									height={30}
								/>
							</div>
							<div className={styles.fadein}>
								<p className={`${styles.content} ${styles.label}`}>
									customer service
								</p>
							</div>
						</li>
					</Link>
					<Link href="#">
						<li className={styles.menuList__wrapper}>
							<div className={styles.icon}>
								<Image src={logoutIcon} alt="logout" width={30} height={30} />
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
