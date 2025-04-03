import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function CulturalEvents() {
  const events = [
    { id: 1, title: 'Dance Competition', date: '2025-05-20', description: 'Join the most exciting dance competition in college!' },
    { id: 2, title: 'Music Fest', date: '2025-06-15', description: 'Experience live music performances by talented students.' }
  ];

  return (
    <Container className="mt-4">
      <h2>Cultural Events</h2>
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

export default CulturalEvents;
