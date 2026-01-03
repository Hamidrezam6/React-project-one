import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  padding: 4px 8px;
  background-color: ${({ variant }) =>
    variant === "primary" ? "green" : "white"};
  color: ${({ variant }) => (variant === "primary" ? "white" : "green")};
  border: ${({ variant }) => variant === "secondary" && "1px solid green"};
  border-radius: 6px;
  font-size: 12px;
`;

const Button = () => {
  return <CustomButton variant="secondary">Button</CustomButton>;
};

export default Button;
