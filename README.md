# Full-Stack Automation Software Testing

This project demonstrates the implementation of full-stack automation software testing, focusing on API testing, contract testing, and UI testing. It utilizes various tools like Postman, Mock Server, JavaScript, Docker, and Playwright to simulate real-world scenarios and ensure system reliability.

## Features

1. **Contract Testing**  
   - Ensures proper integration between the server and the application using contract-based testing.
   - Configures `api.yml` files to define API behaviors and responses.

2. **API Testing with Postman + Mock Server**  
   - Uses Postman to test API functionality by simulating mock server responses.
   - Validates various API scenarios such as data retrieval, error handling, and server failures.

3. **API Testing with JavaScript + Mock Server**  
   - Develops JavaScript scripts to send API requests and validate the responses.
   - Utilizes a mock server (Stubby) to create a controlled environment for realistic API testing.
   - Tests multiple HTTP requests like GET on `/users/1`, `/users/2`, and `/users/3`.
   - Validates response status codes (200, 404, 500) and JSON data files, simulating edge cases and latency.

4. **API Testing with JavaScript + Docker**  
   - Uses Docker to manage the testing environment, including operations like delete, build, and mock API requests.
   - Performs End-to-End (E2E) testing to validate the complete functionality of the system.
   - Conducts Integration testing to check interaction between different services and components.
   - Performs isolated testing of individual service components to verify their functionality.

5. **UI Testing with Playwright**  
   - Implements Playwright for UI testing to simulate user interactions in web applications.
   - Tests user interactions such as button clicks, form submissions, and result verification on web pages.
   - Ensures consistent UI performance across multiple browsers and devices.

## Tools and Technologies

- **Postman**: For API testing and mock server simulation.
- **JavaScript**: For writing test scripts to validate API responses.
- **Stubby**: For mocking API responses in a controlled environment.
- **Docker**: For managing and simulating test environments.
- **Playwright**: For UI automation testing to simulate user interactions with web applications.

## Setup and Installation

### Prerequisites

- Node.js (for JavaScript and Docker setup)
- Docker (for containerized testing environments)
- Postman (for API testing)
- Playwright (for UI testing)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/full-stack-automation-testing.git
