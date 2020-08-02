import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Navigation from "./Navigation";
import Link from "next/Link";

export default function Header({ isDark, navigation }) {
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
					<Navigation navigation={navigation} />
				</Flex>
			</Box>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
	padding: 20px;

	.logo {
		a {
			display: flex;
			align-items: center;
			text-decoration: none;
		}

		.logo-text {
			color: #333333;
			font-weight: bold;
			font-size: ${rem(20)};
			margin-left: 20px;
		}
	}
`;
