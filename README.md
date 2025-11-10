# 🛒 ShopEasy – Frontend E-commerce Platform

**ShopEasy** is a fully functional **e-commerce web application** built with **React.js** and **Redux Toolkit**, featuring seamless product browsing, cart management, secure payments, and an admin dashboard for complete control over orders and inventory.

---

## 🚀 Features

### 🛍️ User-Side
- Browse and view product listings with **responsive grid layout**
- **Advanced filtering**, sorting, and live search functionality
- Add, update, and remove items in the **shopping cart**
- Secure **checkout and online payment** via **Razorpay integration**
- **JWT-based authentication** for login and user sessions
- Optimized performance with **lazy loading** and **code splitting**

### ⚙️ Admin-Side
- **Admin Dashboard** for product management and inventory tracking
- Real-time **order monitoring** and **sales analytics**
- Role-based access control (User / Admin)
- Manage order statuses and stock levels efficiently

---

## 💻 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Redux Toolkit, React Router |
| **Styling** | CSS3  |
| **Payment Gateway** | Razorpay APIs |
| **Authentication** | JWT (JSON Web Tokens) |
| **State Management** | Redux Toolkit (Slices + Async Thunks) |
| **Performance** | Code Splitting, Lazy Loading |

---

## 🔒 Authentication Flow

1. User logs in with email and password.  
2. Backend generates a signed **JWT token**.  
3. Token is stored securely on the client side and used for protected routes.  
4. Admin routes are accessible only with valid admin role tokens.  

---

## 💳 Payment Flow (Razorpay)

1. User proceeds to checkout.  
2. Frontend calls backend API to create an order (`order_id`).  
3. Razorpay Checkout popup is initialized with order details.  
4. On successful payment, Razorpay returns `payment_id` and `signature`.  
5. Backend verifies payment signature using Razorpay’s secret key.  
6. Order is marked as “Paid” after successful verification.

---

## ⚡ Performance Optimizations

- Reduced load time by **30%** with:
  - **React.lazy** and dynamic imports for route-based code splitting  
  - Optimized re-renders by modular component design  
