import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function AccountCenter() {
  const user = { name: "John Doe", email: "johndoe@example.com", registeredEvents: ["Hackathon 2025", "Dance Competition"] };

  return (
    <Container className="mt-4">
      <h2>Account Center</h2>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
          <Card.Text>
            <strong>Registered Events:</strong>
            <ul>
              {user.registeredEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </Card.Text>
          <Button variant="primary">Update Profile</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AccountCenter;
