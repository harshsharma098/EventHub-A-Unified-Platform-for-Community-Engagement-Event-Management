import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function Clubs() {
  const clubs = [
    { id: 1, name: 'Coding Club', description: 'Join the Coding Club for workshops, hackathons, and more.' },
    { id: 2, name: 'Music Club', description: 'Express your musical talents and perform live on stage.' }
  ];

  return (
    <Container className="mt-4">
      <h2>Clubs</h2>
      <Row>
        {clubs.map(club => (
          <Col md={6} key={club.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{club.name}</Card.Title>
                <Card.Text>{club.description}</Card.Text>
                <Button variant="primary">Join Club</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Clubs;
