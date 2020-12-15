import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
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
