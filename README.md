
# MERN Authentication App

A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring JWT authentication, protected routes, and user management.

Live Demo: (https://deploye-auth-mern-app-ui.vercel.app/Login)

## Features

- User registration and login
- JWT token-based authentication
- Protected routes in React
- Persistent login using localStorage
- Toast notifications for user feedback
- Responsive design
- MongoDB database integration
- Express.js REST API
- Password hashing for security

## Tech Stack

### Frontend
- React.js
- React Router v6
- React Toastify
- localStorage for token storage


### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── utils/        # Utility functions
│   │   └── App.js        # Main application component
│   └── package.json
│
└── server/                # Backend Express application
    ├── controllers/      # Route controllers
    ├── models/          # MongoDB models
    ├── routes/         # API routes
    ├── middleware/    # Custom middleware
    ├── config/       # Configuration files
    └── server.js    # Server entry point
```

## API Endpoints

```
POST   /api/auth/register   # Register a new user
POST   /api/auth/login      # Login user
GET    /api/auth/profile    # Get user profile (protected)
POST   /api/auth/logout     # Logout user
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=your_backend_api_url
```

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8000
```

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Backend (Your preferred hosting)
1. Set up environment variables
2. Configure MongoDB Atlas connection
3. Set up CORS to allow requests from your Vercel frontend domain

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/sahilsky-ai/Deployed-Auth-MERN-App.git
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Set up environment variables:
   - Create `.env` files in both client and server directories
   - Add the required environment variables

4. Run the development servers:
```bash
# Run frontend (in client directory)
npm run dev

# Run backend (in server directory)
npm run dev
```

## Security Features

- JWT token authentication
- Password hashing using bcrypt
- HTTP-only cookies
- Protected API routes
- Input validation
- Error handling
- CORS configuration

## Error Handling

The application implements comprehensive error handling:
- Frontend toast notifications for user feedback
- Backend error middleware
- API error responses with appropriate status codes
- Form validation error messages
- Authentication error handling



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT.io](https://jwt.io/)
