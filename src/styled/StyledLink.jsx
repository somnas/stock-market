import styled from "styled-components";

const StyledLink = styled.div`
    font-weight: 600; 
    font-size: large; 
    color: #011936;  
    display: flex;
    flex-direction: column; 
    align-items: center;
    svg {
		max-width: 90px;
        max-height: 90px;
        transform: scale(1); transition: transform 0.4s; 
    }
    svg path {
        fill: #011936;
    }

    &:hover{
        svg {
            transform: scale(1.06); transition: transform 0.4s; 
            }
        }
    }
    @media (max-width: 768px) {
        color: white; 
	svg path {
		fill: white;
	}
	svg {
		max-width: 45px;
		max-height: 45px;
	}
}
`;

export default StyledLink;
