# EventHub-A-Unified-Platform-for-Community-Engagement-Event-Management
EventHub is a web platform that enables students to discover and participate in college events, fests, and contests, open to all and exclusive to internal students. It also integrates a payment gateway for seamless experience of event registration, simplifying event management for organizers and participants.

## Features & User Stories

### 1. User Authentication
**User Story:**
> As a user, I want to sign up and log in securely, so that I can access personalized features and participate in events.

**Acceptance Criteria:**
- Users can sign up using email or phone number.
- Login requires valid credentials with an error message for incorrect inputs.
- Provides a "Forgot Password" option for account recovery.
- Displays validation messages for incorrect or missing input fields.
- Successful login redirects users to the home page.
- Ensures session persistence until the user logs out.

---

### 2. Event Discovery on Home Page
**User Story:**
> As a user, I want to view upcoming events, tech fests, and special events on the home page, so that I can stay updated and participate in relevant activities.

**Acceptance Criteria:**
- Displays featured events, tech fests, and special events in separate sections.
- Each event includes a title, date, description, and an image.
- Users can click on an event for detailed information.
- Events are sorted by date, with the nearest ones displayed first.
- A search/filter option is available for finding specific events.
- Mobile-friendly and responsive design.

---

### 3. Contact Support
**User Story:**
> As a user, I want to access the contact page, so that I can reach out for support or inquiries.

**Acceptance Criteria:**
- Displays a contact form with fields for name, email, subject, and message.
- Includes customer support email and phone number.
- Users receive a confirmation message upon submitting an inquiry.
- Displays social media links for alternative contact options.
- Ensures validation for mandatory fields before submission.

---

### 4. Manage Account Settings
**User Story:**
> As a user, I want to access my account center, so that I can manage my profile and preferences.

**Acceptance Criteria:**
- Displays user profile details (name, email, phone number, etc.).
- Allows users to update profile information.
- Provides options to change passwords and link/unlink social accounts.
- Displays past event participation history.
- Ensures secure authentication before making changes.

---

### 5. View Club Details
**User Story:**
> As a user, I want to explore different clubs in the university, so that I can join and participate in their activities.

**Acceptance Criteria:**
- Displays a list of all available clubs with descriptions.
- Each club page includes details about activities, members, and events.
- Provides a "Join Club" button for interested users.
- Allows club representatives to update information.

---

### 6. Event Registration
**User Story:**
> As a user, I want to register for events through a portal, so that I can secure my participation.

**Acceptance Criteria:**
- Displays a list of upcoming events with registration options.
- Users can fill out a form with personal details and select events.
- Sends a confirmation email upon successful registration.
- Displays a countdown timer for event deadlines.
- Allows users to cancel or modify their registration before the deadline.

---

### 7. Secure Event Payments
**User Story:**
> As a user, I want to make secure payments for paid events, so that I can complete my registration successfully.

**Acceptance Criteria:**
- Supports multiple payment methods (credit/debit cards, UPI, net banking).
- Displays a payment summary before checkout.
- Generates a payment receipt upon successful transaction.
- Ensures encryption and security for all transactions.
- Redirects users to the event registration confirmation page after payment.

---

### 8. Event Feedback Submission
**User Story:**
> As a user, I want to provide feedback after attending an event, so that I can share my experience and suggestions.

**Acceptance Criteria:**
- Displays a feedback form with rating and comment fields.
- Allows anonymous feedback submission.
- Users receive a confirmation after submitting feedback.
- Organizers can view and analyze feedback reports.

---

### 9. Frequently Asked Questions (FAQ)
**User Story:**
> As a user, I want to access a FAQ section, so that I can quickly find answers to common questions.

**Acceptance Criteria:**
- Displays categorized questions with collapsible answers.
- Includes a search bar for easy navigation.
- Allows users to submit new questions if answers are not available.
- Admins can update FAQs based on user queries.

---

### 10. Event Notification Alerts
**User Story:**
> As a user, I want to see event notifications on the home page, so that I stay informed about important updates.

**Acceptance Criteria:**
- Displays an alert slider at the top of the home page.
- Includes event reminders, deadline alerts, and important announcements.
- Allows users to dismiss or mute notifications.
- Updates automatically with new event alerts.
# Event Management System

## Table of Contents
- [Overview](#overview)
- [High-Level Design (HLD)](#high-level-design-hld)
  - [Architecture Overview](#architecture-overview)
  - [Interaction Flow](#interaction-flow)
- [Low-Level Design (LLD)](#low-level-design-lld)
  - [Database Schema](#database-schema)
  - [API Endpoints](#api-endpoints)
- [Code Implementation](#code-implementation)
  - [Backend: Spring Boot](#backend-spring-boot)
  - [Frontend: React](#frontend-react)
- [Summary](#summary)

---

## Overview
The Event Management System is a web application designed to facilitate event registrations, payments, and user interactions in an efficient and secure manner. The system is built using **React.js** for the frontend, **Spring Boot** for the backend, and **MySQL** for data storage.

## High-Level Design (HLD)
### Architecture Overview
- **Frontend:** Developed using **React.js**, with UI/UX prototyped in **Figma**.
- **Backend:** Built with **Spring Boot**, exposing REST APIs for various functionalities.
- **Database:** Uses **MySQL** for persistent storage.

### Interaction Flow
1. **React UI** communicates with **Spring Boot** endpoints via RESTful APIs.
2. **User actions** (e.g., signing up, registering for an event) trigger API calls for validation, transactions, and session management.
3. **Security** is ensured via **JWT tokens** or **session tokens**, and all sensitive transactions (e.g., payments) are encrypted.

## Low-Level Design (LLD)
### Database Schema
#### Users Table
| Column          | Type          | Description                       |
|---------------|-------------|--------------------------------|
| user_id       | INT (PK)     | Unique identifier               |
| name          | VARCHAR      | User's name                     |
| email         | VARCHAR      | User's email                    |
| phone         | VARCHAR      | Contact number                   |
| password_hash | VARCHAR      | Encrypted password               |
| created_at    | TIMESTAMP    | Account creation timestamp       |
| updated_at    | TIMESTAMP    | Last update timestamp           |

#### Events Table
| Column      | Type          | Description                  |
|------------|-------------|----------------------------|
| event_id   | INT (PK)     | Unique identifier          |
| title      | VARCHAR      | Event name                 |
| description| TEXT         | Event details              |
| date       | DATE         | Scheduled event date       |
| image_url  | VARCHAR      | URL of event image         |
| category   | VARCHAR      | Event classification       |

#### Registrations Table
| Column            | Type      | Description                      |
|-----------------|---------|----------------------------------|
| registration_id | INT (PK) | Unique identifier                |
| user_id        | INT (FK) | User registering for the event   |
| event_id       | INT (FK) | Event being registered for       |
| registration_date | TIMESTAMP | Registration timestamp         |
| status         | VARCHAR  | Registration status (Active/Canceled) |

### API Endpoints
#### User Authentication
- `POST /api/auth/signup` – Register a new user.
- `POST /api/auth/login` – Authenticate user and start session.
- `POST /api/auth/forgot-password` – Initiate password recovery.

#### Event Management
- `GET /api/events` – Retrieve a list of events with filters.
- `POST /api/events/{eventId}/register` – Register a user for an event.
- `PUT /api/registrations/{registrationId}` – Modify or cancel a registration.

#### Secure Payments
- `POST /api/payments/checkout` – Process payments for events.

#### Event Feedback
- `POST /api/events/{eventId}/feedback` – Submit user feedback.

#### Club Details
- `GET /api/clubs` – Fetch all club details.
- `GET /api/clubs/{clubId}` – Retrieve details of a specific club.

## Code Implementation
### Backend: Spring Boot
#### UserController (Authentication)
```java
@RestController
@RequestMapping("/api/auth")
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
        try {
            User newUser = userService.registerUser(userDto);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        try {
            String token = userService.authenticateUser(loginDto);
            return ResponseEntity.ok(new AuthResponse(token));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
```

### Frontend: React
#### Login Component
```javascript
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      onLoginSuccess(response.data.token);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
      <p><a href="/forgot-password">Forgot Password?</a></p>
    </form>
  );
};

export default LoginForm;
```

## Summary
- **Frontend:** React.js UI interacts with the backend using REST APIs.
- **Backend:** Spring Boot handles authentication, event management, and payments.
- **Database:** MySQL ensures structured and optimized storage with foreign key constraints.

This document serves as a comprehensive guide for the project, covering both HLD and LLD aspects. The code snippets provide a starting point for implementation, ensuring a well-integrated system for event management.


