---
to: src/components/<%=name%>/__tests__/<%=name%>.js
---
import React from 'react';
import { render } from 'react-testing-library';
import "jest-dom/extend-expect";

import <%=name%> from '../<%=name%>';

describe("<%=name%>", () => {
    test("Has expected text", () => {

        expect(render(<<%=name%> message="Test message" />))

    })
})npm