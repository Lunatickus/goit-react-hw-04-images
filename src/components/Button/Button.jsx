import { StyledButton } from "./Button.styled";

export const Button = ({ incrementPage }) => {
  return (
    <StyledButton type="button" className="Button" onClick={incrementPage}>
      Load more
    </StyledButton>
  );
};
