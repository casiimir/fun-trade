export default function ({ data }) {
	return (
		<div>
			<h1>ciao</h1>
		</div>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://api.coingecko.com/api/v3/coins/${context.query.id}`
	);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
}
