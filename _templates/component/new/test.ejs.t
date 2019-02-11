---
to: src/components/<%=name%>/test/<%=name%>.js
---
import React from 'react'
import { render } from 'react-testing-library'

import <%=name%> from '../<%=name%>'

describe("<%=name%>", () => {
    test("Test", () => {

        expect(render(<<%=name%> />))

    })
})