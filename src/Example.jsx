import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Example() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          {/* This column will take full width on extra-small screens (xs), and 6 columns on medium (md) screens */}
          <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Column 1</div>
        </Col>
        <Col xs={12} md={6}>
          {/* This column will also take full width on extra-small screens and 6 columns on medium screens */}
          <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Column 2</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Example;