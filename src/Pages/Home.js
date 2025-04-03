import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <div className="jumbotron text-center bg-light p-5 rounded">
        <h1 className="display-4">Welcome to College Events</h1>
        <p className="lead">Discover hackathons, clubs, cultural & technical events at your college!</p>
        <hr className="my-4" />
        <p>Join now to stay updated and register for your favorite events.</p>
        <LinkContainer to="/login">
          <Button variant="primary" size="lg">Login / Signup</Button>
        </LinkContainer>
      </div>
    </Container>
  );
}

export default Home;
