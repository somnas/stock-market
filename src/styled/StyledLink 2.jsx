import styled, {keyframes} from 'styled-components'

const StyledLink = styled.div`
    color: black; 
    font-weight: 600; 
    font-size: large; 
    img {
      transform: scale(1); transition: transform 0.4s
    }
    &:hover{
        img {
            transform: scale(1.06); transition: transform 0.4s
            }
        }
    }
`

export default StyledLink