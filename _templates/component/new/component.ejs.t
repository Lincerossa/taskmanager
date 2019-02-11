---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from 'react'
import styled from 'styled-components'

type props = {
  message: string
}

const <%=name%>: React.FC<props> = ({ message }) => (
  <Container><%=name%></Container>
);

export default <%=name%>

const Container = styled.div`
  border: 1px solid red;
`