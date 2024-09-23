import styled from "@emotion/styled";

const StyledButton = styled.button`
    color: red;
`

export const Button = () => {
    const handleClick = () => {
        alert("Button clicked")
    }
    return (
        <StyledButton onClick={handleClick}>Click me</StyledButton>
    )
}