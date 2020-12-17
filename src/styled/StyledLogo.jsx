import styled from "styled-components";

const StyledLogo = styled.div`
	display: flex;
	justify-content: center;

	img {
		width: 300px;
		margin-top: 50px;
	}
`;

export default StyledLogo;

/* background: ${(props) => (props.frontpage ? "green" : "red")}; */
