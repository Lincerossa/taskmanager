---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from 'react'
import styled from 'styled-components'

function <%=name%>(props) {
  return (
    <Container><%=name%></Container>
  )
}

export default <%=name%>

const Container = styled.div`
  border: 1px solid red;
`