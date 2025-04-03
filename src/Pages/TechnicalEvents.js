import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function TechnicalEvents() {
  const events = [
    { id: 1, title: 'Hackathon 2025', date: '2025-05-30', description: 'Code your way to success in our college hackathon.' },
    { id: 2, title: 'Tech Talk', date: '2025-06-10', description: 'Join industry experts for an insightful tech talk.' }
  ];

  return (
    <Container className="mt-4">
      <h2>Technical Events</h2>
      <Row>
        {events.map(event => (
          <Col md={6} key={event.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button variant="primary">Register</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TechnicalEvents;
