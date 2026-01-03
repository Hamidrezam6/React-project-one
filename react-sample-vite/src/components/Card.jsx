import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  padding: 16px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  & label {
    color: grey;
    font-size: 16px;
    &:hover {
      color: black;
    }
  }
  &:hover {
    background-color: #ccc;
  }

  @media (max-width: 700px) {
    background-color: yellow;
  }
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
