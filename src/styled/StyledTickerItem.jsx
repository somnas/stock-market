import styled from "styled-components";
import { colors } from "../Library";

const StyledTickerItem = styled.div`
	margin: 0.2rem;
	padding: 0.1rem;
	background: ${colors.backgroundColor};
	color: ${colors.textColor};
	h1 {
		font-size: 2.2rem;
	}
	h2 {
		font-size: 1.6rem;
		opacity: 0.5;
		font-weight: 300;
	}

	div div p {
		font-size: 2.5rem;
	}
	div div p.today {
		font-size: 1.3rem;
	}
`;
export { StyledTickerItem };
