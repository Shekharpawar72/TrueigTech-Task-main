# TrueigTech Task

A full-stack web application for managing fitness plans, subscriptions, and trainer interactions. Built with a Node.js backend and React frontend.

## Features

- User authentication and authorization
- Fitness plan management
- Subscription handling
- Trainer dashboard
- User dashboard with followed trainers
- Responsive UI with modern design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing

### Frontend
- React
- Vite
- Axios for API calls
- Lucide React for icons
- Tailwind CSS for styling

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd TrueigTech-Task-main
   ```

2. Install backend dependencies:
   ```
   cd Backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../Frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the Backend directory
   - Add your MongoDB connection string and JWT secret

## Usage

1. Start the backend server:
   ```
   cd Backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. Start the frontend development server:
   ```
   cd Frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Plans
- `GET /api/plans` - Get all plans
- `POST /api/plans` - Create a new plan
- `PUT /api/plans/:id` - Update plan
- `DELETE /api/plans/:id` - Delete plan

### Subscriptions
- `GET /api/subscriptions` - Get all subscriptions
- `POST /api/subscriptions` - Create a new subscription
- `PUT /api/subscriptions/:id` - Update subscription
- `DELETE /api/subscriptions/:id` - Delete subscription

## Project Structure

```
TrueigTech-Task-main/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── routes/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.MD
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

“For better understanding, please refer to this flowchart image.”

1.  ![imagr alt](https://github.com/Shekharpawar72/TrueigTech-Task-main/blob/9726221de670a14e708f3c697c521a913fc00dce/Backend/WhatsApp%20Image%202025-12-14%20at%2019.47.10_3eadb367.jpg)


![image alt]( https://github.com/Shekharpawar72/TrueigTech-Task-main/blob/fbca9d718561dd3b0617a1b8afdb772cc906fed3/Backend/WhatsApp%20Image%202025-12-14%20at%2019.47.29_62e00bf7.jpg)

![iamge alt](
https://github.com/Shekharpawar72/TrueigTech-Task-main/blob/fbca9d718561dd3b0617a1b8afdb772cc906fed3/Backend/WhatsApp%20Image%202025-12-14%20at%2019.47.29_62e00bf7.jpg)


![image alt](https://github.com/Shekharpawar72/TrueigTech-Task-main/blob/fbca9d718561dd3b0617a1b8afdb772cc906fed3/Backend/WhatsApp%20Image%202025-12-14%20at%2019.47.40_d71900ef.jpg
)

![image alt](

https://github.com/Shekharpawar72/TrueigTech-Task-main/blob/fbca9d718561dd3b0617a1b8afdb772cc906fed3/Backend/WhatsApp%20Image%202025-12-14%20at%2019.47.54_76266e09.jpg )
