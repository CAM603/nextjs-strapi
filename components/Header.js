import styled from "@emotion/styled";
import { rem } from "polished";

export default function Header({ isDark }) {
	return (
		<HeaderStyled isDark={isDark}>
			<div className="container">
				<div className="logo">
					<p className="logo-text">Logo</p>
				</div>
			</div>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
	padding: 20px;

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
