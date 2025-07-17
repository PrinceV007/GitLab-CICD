Introduction 
GitLab CI/CD for Microservices is a comprehensive DevOps project aimed at automating the development, testing, security analysis, and deployment of a Node.js-based microservices system. Built entirely on the GitLab platform, the pipeline uses a declarative .gitlab-ci.yml configuration to orchestrate builds, run unit tests with coverage, scan for vulnerabilities, and deploy services using Docker. This integration enables seamless delivery of code changes across multiple services, eliminating the need for manual workflows or third-party tools. 

By leveraging industry-standard tools like Git, Docker, SonarCloud, Trivy, and Docker Compose, this project ensures that each microservice—auth, product, and cart—is continuously validated for quality and security. The system mirrors real-world DevOps practices, including artifact handling, secure token-based scanning, and staged pipeline execution. Designed for scalability and clarity, the solution demonstrates how modern CI/CD can enforce best practices and streamline multi-service deployments within a single, cohesive GitLab pipeline. 

Process Flow 
The CI/CD pipeline follows a structured, multi-stage process designed to ensure automation, quality validation, and security across the entire microservices system. Each stage handles a specific function and passes relevant data using GitLab artifacts. The five core stages are: 

Build: In the build stage, Docker images are constructed for each microservice (auth, product, and cart) using docker build. This guarantees consistent and isolated environments for subsequent testing, scanning, and deployment. By containerizing each service early in the pipeline, the project ensures reproducibility and alignment with real-world cloud deployment practices. 

Test: The test stage executes unit tests for each service using Jest, with the --coverage flag enabled. This generates lcov.info files that contain detailed line-by-line test coverage data. These files are collected into a shared coverage-artifacts directory and uploaded as GitLab artifacts, making them available for use in the next stage (quality analysis). 

Quality: In the quality stage, the SonarCloud scanner processes the coverage reports generated earlier. The scanner connects securely via the SONAR_TOKEN and reads all lcov.info files passed from the test stage. The results are displayed in the SonarCloud dashboard, with the project achieving a combined test coverage of 22.32%. This validates that the pipeline correctly collects, transfers, and analyzes test coverage across services. 

Scan: The scan stage focuses on container security. It uses Trivy to analyze the built Docker images of all services, specifically targeting HIGH and CRITICAL vulnerabilities. The scan outputs are saved in JSON format and uploaded as artifacts. For example, the cart-service scan identified 265 vulnerabilities, including 9 critical, helping highlight areas for future security improvements before deployment. 

Deploy: In the deploy stage, all microservices are brought online using docker-compose up -d --build. This automatically starts auth-service, product-service, and cart-service on ports 3001, 3002, and 3003 respectively. The use of Docker Compose simplifies local deployment and enables quick end-to-end testing of all services in an isolated, production-like environment. 




Feedback of Team Members: 
Bhavya Jain: Didnt respond to the main group/ channel which was created due to which there was no response from his side towards the project, contated me once on personal channel to learn how to operate on gitlab but didnt reply to any work related messages on the official channel.
Productivity: Completed the documentation part of the project on the last day.

Vansh Gupta: Didnt respond to the main group/ channel which was created due to which there was no response from his side towards the project, didnt even contaced me on personal channel so there was 0 collaboration during the implementation process/ phase of the project.
Productivity: Completed the ppt of the project on the last day
