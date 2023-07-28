import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import {
	GoogleAuthProvider,
	FacebookAuthProvider,
	GithubAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APY_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//PROVIDERS
export const provider = new GoogleAuthProvider();
export const Gitprovider = new GithubAuthProvider();

export const auth = getAuth();

/**
 * Reads the database and returns a list of objects containing all user data
 * @date 27/7/2023 - 22:41:54
 *
 * @async
 * @returns {Array}
 */
export const getData = async () => {
	try {
		const data = [];
		const querySnapshot = await getDocs(collection(db, "users"));
		querySnapshot.forEach((doc) => data.push(doc.data()));
		return data;
	} catch (error) {
		console.error(`Message : ${e.message}`);
	}
};

/**
 * Through the parameters it writes a new user inside the database
 * @date 27/7/2023 - 22:43:36
 *
 * @async
 * @param {*} username
 * @param {*} email
 * @param {*} password
 * @param {number} [id=0]
 * @param {string} [avatar=`https://robohash.org/${username}`]
 * @returns {*}
 */
export const postData = async (
	username,
	email,
	password,
	id = 0,
	avatar = `https://robohash.org/${username}`
) => {
	try {
		const docRef = await addDoc(collection(db, "users"), {
			username,
			email,
			password,
			balance: Math.floor(Math.random() * 1500),
			avatar,
			preference: [],
			transition: [
				{
					name: "Bitcoin",
					badget: Math.floor(Math.random() * 1500),
				},
				{
					name: "Ethereum",
					badget: Math.floor(Math.random() * 1500),
				},
				{
					name: "Tether",
					badget: Math.floor(Math.random() * 1500),
				},
				{
					name: "Dogecoin",
					badget: Math.floor(Math.random() * 1500),
				},
			],
			id,
		});
	} catch (e) {
		console.error(`Message : ${e.message}`);
	}
};

/**
 * work in progress...
 * @date 27/7/2023 - 22:44:51
 *
 * @async
 * @param {*} id
 * @param {*} crypto
 * @returns {*}
 */
export const updateData = async (id, crypto) => {
	const washingtonRef = doc(db, "users", id);
	await updateDoc(washingtonRef),
		{
			preference: [...data.preference, crypto],
		};
};

/**
 * then it checks the user data in the db (getData) and if it doesn't exist it creates it (postData)
 * @date 27/7/2023 - 22:46:08
 *
 * @async
 * @returns {unknown}
 */
export const authGoogle = async () => {
	const res = await signInWithPopup(auth, provider);
	getData()
		.then((data) => {
			const post = data.find((user) => user.id === res.user.uid);
			return post;
		})
		.then((post) => {
			!post
				? postData(
						res.user.displayName,
						res.user.email,
						res.user.uid,
						res.user.uid,
						res.user.photoURL
				  )
				: null;
		});
	return res.user;
};

/**
 * then it checks the user data in the db (getData) and if it doesn't exist it creates it (postData)
 * @date 27/7/2023 - 22:47:46
 *
 * @async
 * @returns {unknown}
 */
export const authGit = async () => {
	const res = await signInWithPopup(auth, Gitprovider);
	getData()
		.then((data) => {
			const post = data.find((user) => user.id === res.user.uid);
			return post;
		})
		.then((post) => {
			!post
				? postData(
						res.user.reloadUserInfo.screenName,
						res.user.email,
						res.user.uid,
						res.user.uid,
						res.user.photoURL
				  )
				: null;
		});

	console.log(res.user);
	return res.user;
};
