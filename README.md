
# Spring Boot ChatGPT API Integration

## Overview

This project demonstrates how to integrate OpenAI's ChatGPT API with a Spring Boot application to enable AI-powered chat capabilities.

## Prerequisites

Before you begin, ensure you have the following installed:

- Java Development Kit (JDK) 18 
- Gradle build tool
- IDE (e.g., IntelliJ IDEA, Eclipse)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kunalkkr/SpringBoot-ChatGpt-Api-Integration.git
   cd springboot-chatgpt-api
   ```

2. **Configure ChatGPT API credentials:**


   you can set this in your `application.properties` file:

   ```properties
   openai.api-key=<your-api-key>
   ```

3. **Run the application:**

   ```bash
   gradle clean build
   gradle -bootRun
   ```

   The application will start on `http://localhost:8088`.

## Usage

Once the application is running, you can interact with the ChatGPT API using endpoints provided by the Spring Boot application.

## Example

To interact with the ChatGPT API:

1. Send a GET request using cURL:

   ```bash
   curl -X GET 'http://localhost:8088/ai-chat
   ```

   This will return a JSON response with ChatGPT's reply.

2. Integrate the endpoint into your frontend or other applications to enable chat functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
