import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Navigation from "./Navigation";
import Link from "next/Link";
import ToggleNavColorButton from "./ToggleNavColorButton";

export default function Header({ isDark }) {
	return (
		<HeaderStyled isDark={isDark}>
			<Box variant="container">
				<Flex justifyContent="space-between" alignItems="center">
					<Link href="/">
						<a>
							<div className="logo">
								<p className="logo-text">Logo</p>
							</div>
						</a>
					</Link>
					<Navigation />
					<ToggleNavColorButton />
				</Flex>
			</Box>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	background: ${(props) => (props.isDark ? "darkgrey" : "#efefef")};
	padding: 20px;

	a {
		text-decoration: none;
	}

	.logo {
		display: flex;
		align-items: center;

		.logo-text {
			color: #333333;
			font-weight: bold;
			font-size: ${rem(20)};
			margin-left: 20px;
		}
	}
`;
