# MERN - Auth

This project is a MERN (MongoDB, Express, React, Node.js) stack application focused on authentication.

## Features

- User registration
- User login
- Email verification
- Password encryption
- JWT authentication
- Admin panel access
- User login and logout history
- Failed login attempts and account lockout

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/pavan347/MERN-Auth.git
    ```

2. Install necessary dependencies:
    ```sh
    cd server
    npm install
    ```

    ```sh
    cd ../client
    npm install
    ```

    ```sh
    cd ../admin
    npm install
    ```

## Usage

1. Create a `.env` file in the `server` directory with the following content:
    ```sh
    PORT=3000
    MONGODB_LOCAL_URI=mongodb://localhost/yourdbname
    JWT_SECRET_KEY=your_jwt_secret_key
    NODE_ENV=development
    MONGODB_URI=your_mongodb_connection_string

    SMTP_USER=your_smtp_user
    SMTP_PASS=your_smtp_password

    SENDER_EMAIL=your_sender_email@example.com

    ADMIN_EMAIL=admin@example.com
    ADMIN_PASS=your_admin_password
    ```

2. Create a `.env` file in the `client` directory with the following content:
    ```sh
    VITE_BACKEND_URL=http://localhost:3000
    ```

3. Create a `.env` file in the `admin` directory with the following content:
    ```sh
    VITE_BACKEND_URL=http://localhost:3000
    ```

4. Open server, admin, and client in 3 different terminals:
    ```sh
    cd server
    npm run server
    ```

    ```sh
    cd admin
    npm run dev
    ```

    ```sh
    cd client
    npm run dev
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Screenshots

### Client Side

#### Homepage
![Homepage](./client/public/project_images/1homepage.jpeg)

#### About Page
![About Page](./client/public/project_images/2aboutpage.jpeg)

#### Contact Page
![Contact Page](./client/public/project_images/3contactpage.jpeg)

#### Register Page
![Register Page](./client/public/project_images/4registerpage.jpeg)

#### Login Page
![Login Page](./client/public/project_images/5loginpage.jpeg)

#### Login Successful
![Login Successful](./client/public/project_images/6loginsuccessful.jpeg)

#### Verify Email
![Verify Email](./client/public/project_images/7verifyemail.jpeg)

#### Account Verified
![Account Verified](./client/public/project_images/8accountverified.jpeg)

### Admin Side

#### Admin Login
![Admin Login](admin/public/project_images/1adminlogin.png)

#### Admin Dashboard
![Admin Dashboard](admin/public/project_images/2admindashboard.jpeg)

#### All Users
![All Users](admin/public/project_images/3allusers.png)

#### User Logs
![User Logs](admin/public/project_images/4userlogs.jpeg)

## Contact

For any inquiries or questions or if you need the project, please contact us at [pavankumargarapati04@gmail.com](mailto:pavankumargarapati04@gmail.com).