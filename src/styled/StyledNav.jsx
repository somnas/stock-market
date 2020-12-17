import React from "react";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
	@media (min-width: 769px) {
		z-index: 1;

		${({ listPage }) =>
			listPage &&
			css`
				color: sticky;
				background: #e5e5e5;
				position: sticky;
				width: calc(100% + 50px);
				margin-left: -25px;
			`}

		top: 0;
	}

	@media (max-width: 768px) {
		background: #011936;
		position: fixed;
		bottom: 0;

		width: 100%;
		z-index: 1;
		left: 0;
		padding: 0 15px;
	}
`;

export default StyledNav;
