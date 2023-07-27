import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
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

export const provider = new GoogleAuthProvider();

export const auth = getAuth();

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
			id,
		});
	} catch (e) {
		console.error(`Message : ${e.message}`);
	}
};

export const updateData = async (id, crypto) => {
	const washingtonRef = doc(db, "users", id);
	await updateDoc(washingtonRef),
		{
			preference: [...data.preference, crypto],
		};
};

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

	console.log(res.user);
	return res.user;
};
