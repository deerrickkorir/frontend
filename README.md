# CarCare Connect

CarCare Connect is a comprehensive platform dedicated to automotive spare parts. It provides a seamless interface for users to browse, search, and manage various types of automotive spare parts, ensuring that customers find exactly what they need.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description

CarCare Connect is designed to streamline the process of finding and purchasing automotive spare parts. Whether you're looking for engine components, brake systems, electrical parts, or body parts, our platform offers a user-friendly interface to meet your needs. Built with a robust frontend using React and a powerful backend with Python and FastAPI, CarCare Connect ensures efficient performance and a smooth user experience.

## Installation

To get started with CarCare Connect, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- Python 3.x
- FastAPI
- npm (Node Package Manager)

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/deerickkorir/carcare-connect.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd carcare-connect/frontend
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the frontend server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd carcare-connect/backend
    ```
2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```
3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```
4. Start the backend server:
    ```bash
    uvicorn main:app --reload
    ```

## Video
[project video](https://youtu.be/Ef_MJfvuPdo)

### Frontend

The frontend is built using React, React Bootstrap, React Router, and various other libraries to enhance the user experience. Navigate to the application in your web browser (usually `http://localhost:3000`).

### Backend

The backend API is built using FastAPI. You can access the API documentation at `http://localhost:8000/docs` to explore available endpoints and their usage.

### Forms and Validation

Forms in the application are managed using [React Hook Form](https://react-hook-form.com) and validation is handled by [Zod](https://zod.dev).

## Contributing

We welcome contributions from the community. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [deerickkorir](https://github.com/deerickkorir).



