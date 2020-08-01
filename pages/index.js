import Card from "components/Card";

// import styles from "../styles/Home.module.css";
import fetch from "isomorphic-unfetch";

export default function Home({ movies }) {
	return (
		<div className="container">
			{movies.map((movie) => (
				<Card key={movie.id} movie={movie} />
			))}
		</div>
	);
}

export async function getServerSideProps() {
	const { API_URL } = process.env;

	const res = await fetch(`${API_URL}/movies`);
	const data = await res.json();

	return {
		props: {
			movies: data,
		},
	};
}
