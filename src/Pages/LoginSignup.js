import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function LoginSignup() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center">Login / Signup</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSignup;
