import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/FunAcademy.module.scss";

const FunAcademy = () => {
	return (
		<div className={styles.container}>
			<div className={styles.outerCircle}>
				<div className={styles.innerCircle}>
					<Image
						src="/assets/iconsProject/school.svg"
						alt="Logo"
						width={500}
						height={500}
						className={styles.logo}
					/>
				</div>
			</div>
		</div>
	);
};

export default FunAcademy;
