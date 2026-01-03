import React from "react";
import styled from "styled-components"

const Text = styled.div`
    color: black;
    font-size: 24px;
    padding: 8px:
    margin: 12px:
    font-weight: 600;
`;

const Heading = ({ title }) => {
  return <Text>{title}</Text>;
};

export default Heading;
