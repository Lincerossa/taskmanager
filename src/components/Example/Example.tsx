import React from "react";
import styled from "styled-components";

type props = {
  message: string;
};

const Example: React.FC<props> = ({ message }) => (
  <Container>Example {message}</Container>
);

export default Example;

const Container = styled.div`
  border: 1px solid red;
`;
