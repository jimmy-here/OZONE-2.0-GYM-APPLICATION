# Ozone 2.0 Gym Application

## Overview
Ozone 2.0 is a feature-rich gym application developed using **React** and supporting libraries, designed to provide users with an engaging and seamless experience. This application integrates various front-end components, SVG icons, and a robust backend to ensure a professional and user-friendly interface.

## Features
- **BMI Calculator**: Calculate Body Mass Index to track fitness progress.
- **Contact Form**: Allows users to reach out via email, leveraging SMTP for secure communication.
- **Footer and Gallery**: A visually appealing gallery and footer for better navigation.
- **Hero Section**: A dynamic introduction section to captivate user attention.
- **Navbar**: A responsive and easy-to-use navigation bar.
- **Pricing**: Displays membership pricing options.
- **Workout Session**: Informative sessions to guide users through their fitness journey.

## Frontend
The frontend is developed using **React** with the following libraries:

### Libraries Used:
1. **React Spinner**: For adding attractive loading animations.
2. **React Toastify**: To display interactive and styled notifications.
3. **React-Router DOM**: For seamless navigation between components.
4. **Axios**: For handling API requests efficiently.
5. **Lucide React**: Provides a wide range of high-quality SVG icons for an enhanced UI.

### Components:
All components are created as `.jsx` files:
- `BMICalculator`
- `Contact`
- `Footer`
- `Gallery`
- `Hero`
- `Navbar`
- `Pricing`
- `WorkoutSession`

## Backend
The backend is built using **Express.js** with the following tools:

### Tools Used:
1. **Axios**: For API integration and server-side requests.
2. **dotenv**: To securely store and access confidential data such as API keys and SMTP credentials.
3. **Nodemailer**: For sending emails through the contact form using SMTP.

### SMTP Configuration:
The application leverages **SMTP** for handling email communications:
- **Host**: Configured for the mail server.
- **Port**: Secure port for email delivery.
- **Service**: Mail service provider (e.g., Gmail, Outlook).
- **Email & Password**: Confidential credentials stored securely using `dotenv`.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ozone-2.0.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ozone-2.0
   ```
3. Install dependencies for frontend:
   ```bash
   cd frontend
   npm run dev
   ```
4. Install dependencies for backend:
   ```bash
   cd backend
   npm run dev
   ```

## Usage
1. Start the backend server:
   ```bash
   npm run dev
   ```
2. Start the React frontend:
   ```bash
   npm run dev
   ```
3. Open the application in your browser at `http://localhost:4000`.

## Folder Structure
```
Ozone 2.0/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BMICalculator.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── WorkoutSession.jsx
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── .env
```

## Future Enhancements
- Add user authentication for secure access.
- Implement advanced analytics to track user progress.
- Include payment integration for online membership purchases.

## Contributions
Contributions are welcome! Please create an issue or submit a pull request to propose changes.

## License
This project is licensed under the [MIT License](LICENSE).
