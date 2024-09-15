# Food Delivery App (MERN Stack)

This is a full-stack food delivery application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to browse food items, add them to a cart, place an order, and make payments through Stripe's demo payment gateway. An admin panel provides functionality to manage orders and add new food items.

## Features

### User Functionalities:
- **Sign Up / Login**: Users can create an account or log in to their existing account.
- **Home Page**: Displays a variety of food items available for ordering.
- **Cart**: Users can add food items to the cart and view them on the cart page.
- **Place Order**: Users enter their name, address, and phone number to place an order.
- **Stripe Payment Integration**: A demo payment page using Stripe is provided for order confirmation.
  
### Admin Functionalities:
- **View Orders**: Admin can view all the orders placed by users.
- **Update Order Status**: Admin can change the status of an order (e.g., Food Processing, Out for Delivery, Delivered).
- **Add Food Items**: Admin can add new food items to the menu through the admin panel.
- **View food items**: Admin can vew all the food items available in the database.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Payment Gateway**: Stripe (Demo)
  
## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed and running locally or a cloud MongoDB Atlas account
- Stripe account for payment integration

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nithinsr04/Food-delivery.git

  Navigate to the project directory:
  ```bash
  cd Food-delivery

```
2. **Install dependencies for both frontend and backend**:
```bash
  npm install
```
3. **Set up environment variables: Create a .env file in the root directory and add the following**:

```bash
MONGO_URI=<your_mongo_database_url>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
```

4.**Run the application**:
Backend:
```bash
    cd backend
    npm start
```
Frontend:
```bash 
    cd frontend
    npm start
```
5.**Open http://localhost:3000 in your browser to use the app**.

Admin Access

    To access the admin panel, sign in with an admin account.

Future Enhancements

    Integration with real-time delivery tracking.
    Email or SMS notifications for order updates.
    User profile management and order history.
