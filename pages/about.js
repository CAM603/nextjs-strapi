import { NextSeo } from "next-seo";

export default function About() {
	const SEO = {
		title: "About",
		description: "an about page",

		openGraph: {
			title: "About",
			description: "an about page",
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<h3>About</h3>
		</>
	);
}
