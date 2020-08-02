import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import { useRouter } from "next/router";

export default function MoviePage({ movies, page, movieCount }) {
	const router = useRouter();

	const lastPage = Math.ceil(movieCount / 3);

	return (
		<Box variant="container" pt={40}>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<h3>{movie.title}</h3>
					</li>
				))}
			</ul>
			<Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
				<button
					onClick={() => router.push(`/movies?page=${page - 1}`)}
					disabled={page <= 1}
				>
					Previous
				</button>
				<button
					onClick={() => router.push(`/movies?page=${page + 1}`)}
					disabled={page >= lastPage}
				>
					Next
				</button>
			</Flex>
		</Box>
	);
}

export async function getServerSideProps({ query: { page = 1 } }) {
	const { API_URL } = process.env;

	const start = parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * 3;

	const movieCountRes = await fetch(`${API_URL}/movies/count`);
	const movieCount = await movieCountRes.json();

	const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start}`);
	const data = await res.json();

	return {
		props: {
			movies: data,
			page: parseInt(page),
			movieCount,
		},
	};
}
