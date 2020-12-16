import styled, { css } from "styled-components";
import { colors } from "../Library";

const StyledListedItem = styled.div`
	div {
		color: ${colors.textColor};
	}

	&:hover {
		transform: scale(1.01);
		transition: transform 0.2s;
		a {
			text-decoration: none !important;
		}
	}

	${({ market }) =>
		market &&
		css`
			transform: scale(1);
			transition: transform 0.2s;
			font-size: 1.6rem;

			div {
				display: flex;
				justify-content: center;
			}

			text-transform: capitalize;
		`}

	${({ tickerItem }) => tickerItem && css``}
`;
export { StyledListedItem };
