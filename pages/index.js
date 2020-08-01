import Card from "components/Card";

import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
// import styles from "../styles/Home.module.css";

export default function Home({ movies }) {
	return (
		<Box variant="container" bg={{ _: "white", lg: "white" }}>
			<Box my={40} as="h2">
				Latest Movies
			</Box>
			<Flex
				justifyContent="space-between"
				flexDirection={{ _: "column", md: "row" }}
			>
				{movies.map((movie) => (
					<Box key={movie.id} width={{ _: "100%", md: "30%" }}>
						<Card movie={movie} />
					</Box>
				))}
			</Flex>
		</Box>
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
