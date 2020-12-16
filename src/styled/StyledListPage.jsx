import styled from "styled-components";
import { colors } from "../Library";

const StyledListPage = styled.div`
	h1 {
		text-transform: capitalize;
		color: ${colors.textColor};
		text-align: center;
	}
`;

// const Button = styled.button`
// 	background: yellow;
// `;

// // extends Button
// const ButtonSecondary = styled(Button)`
// 	padding: 30px;
// `;

export { StyledListPage };
