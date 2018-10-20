import styled from 'styled-components'

const colors = {
    primary: 'blue',
    secondary: 'gray',
    danger: '#dc3545'
}

export const StyledButton = styled.button`
  background: ${props => colors[props.color]};
  border-radius: 3px;
  padding: 0.4em 1.5em;
  border: none;
  color: white;
`