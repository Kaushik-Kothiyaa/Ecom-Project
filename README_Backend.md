"# ecommerce-backend" 

# E-Commerce REST API Backend

A complete, production-ready REST API backend for an online shopping application, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. Follows MVC architecture with clean, modular, reusable code — designed to be consumed by any frontend (React, Vue, mobile app, etc).

---

## Tech Stack

| Purpose             | Package             |
|----------------------|----------------------|
| Server framework     | Express.js           |
| Database             | MongoDB Atlas + Mongoose |
| Authentication       | JSON Web Tokens (jsonwebtoken) |
| Password hashing     | bcryptjs              |
| Validation           | express-validator     |
| Environment vars     | dotenv                |
| File upload          | Multer (local disk)   |
| Payments             | Razorpay               |
| Logging              | Morgan                 |
| CORS                 | cors                   |
| Security             | helmet, express-rate-limit, express-mongo-sanitize, xss-clean |
| Dev tooling          | nodemon                |

---

## Folder Structure

```
project/
├── controllers/      # Request handlers (business logic entry points)
├── models/           # Mongoose schemas (User, Category, Product, Cart, Order, Payment)
├── routes/           # Express routers, one per resource + index.js
├── middleware/       # auth, role, error, upload, validation middleware
├── config/           # db.js - MongoDB connection
├── utils/            # apiResponse, generateToken, slugify helpers
├── services/         # Reusable business/data logic (razorpay.service, user.service)
├── validators/       # express-validator rule sets per resource
├── uploads/           # Uploaded images are stored here (served at /uploads)
├── public/            # Static assets
├── helpers/           # catchAsync wrapper, custom AppError class
├── constants/         # roles.js, orderStatus.js
├── app.js             # Express app setup (middleware + routes)
├── server.js          # Entry point - connects DB then starts server
├── .env.example        # Environment variable template
└── package.json
```

---

## Installation & Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Copy `.env.example` to `.env` and fill in your own values:
```bash
cp .env.example .env
```

```env
PORT=5000
NODE_ENV=development

MONGODB_URI=your_mongodb_atlas_connection_string_here

JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here
JWT_REFRESH_EXPIRE=30d

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

CLIENT_URL=http://localhost:3000
```

> **Never commit your real `.env` file.** It is already excluded via `.gitignore`.

### 3. Get a MongoDB Atlas connection string
1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Add a database user + allow your IP (or `0.0.0.0/0` for development)
3. Copy the connection string into `MONGODB_URI`

### 4. Get Razorpay test keys
1. Sign up at https://dashboard.razorpay.com
2. Go to Settings → API Keys → Generate Test Key
3. Put the key id/secret into `.env`

### 5. Run the project

Development (auto-restarts on file changes):
```bash
npm run dev
```

Production:
```bash
npm start
```

The API will be running at `http://localhost:5000`.

---

## Authentication

Uses stateless JWT authentication.

1. `POST /api/auth/register` or `POST /api/auth/login` returns an `accessToken` and `refreshToken`.
2. Send the access token on every protected request:
   ```
   Authorization: Bearer <accessToken>
   ```
3. Roles: `admin` and `user`. Admin-only routes are protected with the role middleware.

---

## Standard API Response Format

**Success**
```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": { "products": [], "pagination": {} }
}
```

**Error**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [{ "field": "email", "message": "Please provide a valid email" }]
}
```

---

## API Endpoints

### Auth — `/api/auth`
| Method | Endpoint | Access |
|---|---|---|
| POST | /register | Public |
| POST | /login | Public |
| POST | /logout | Private |
| POST | /forgot-password | Public |
| POST | /reset-password | Public |
| GET | /profile | Private |
| PUT | /profile | Private |
| PUT | /change-password | Private |

### Users — `/api/users` (Admin only)
| Method | Endpoint |
|---|---|
| GET | /dashboard |
| GET | / |
| GET | /:id |
| PUT | /:id/activate |
| PUT | /:id/deactivate |
| DELETE | /:id |

### Categories — `/api/categories`
| Method | Endpoint | Access |
|---|---|---|
| GET | / | Public |
| GET | /:id | Public |
| POST | / | Admin |
| PUT | /:id | Admin |
| DELETE | /:id | Admin |

### Products — `/api/products`
| Method | Endpoint | Access |
|---|---|---|
| GET | / (supports `?page=&limit=&category=&brand=&minPrice=&maxPrice=&search=&sort=`) | Public |
| GET | /search?q= | Public |
| GET | /latest | Public |
| GET | /featured | Public |
| GET | /:id | Public |
| GET | /:id/related | Public |
| POST | / (multipart, field `images`, up to 5) | Admin |
| PUT | /:id | Admin |
| DELETE | /:id | Admin |

### Cart — `/api/cart` (User only)
| Method | Endpoint |
|---|---|
| GET | / |
| POST | / |
| PUT | /:itemId |
| DELETE | /:itemId |
| DELETE | / |

### Orders — `/api/orders`
| Method | Endpoint | Access |
|---|---|---|
| POST | / | User |
| GET | / | User |
| GET | /:id | User (own) / Admin |
| PUT | /:id/cancel | User (own) |
| GET | /admin/all | Admin |
| PUT | /:id/status | Admin |

### Payments — `/api/payments`
| Method | Endpoint | Access |
|---|---|---|
| POST | /create-order | User |
| POST | /verify | User |
| GET | / | Admin |

**Razorpay flow:**
1. Frontend creates a DB order via `POST /api/orders`.
2. Frontend calls `POST /api/payments/create-order` with the `orderId` to get a Razorpay order + public key.
3. Frontend opens Razorpay Checkout using the returned `key` and `razorpayOrder`.
4. On success, frontend sends `razorpay_order_id`, `razorpay_payment_id`, `razorpay_signature` to `POST /api/payments/verify`.
5. Backend verifies the signature and marks the order as paid.

---

## Security Features

- **Helmet** — secure HTTP headers
- **express-rate-limit** — 200 requests / 15 min per IP on `/api`
- **express-mongo-sanitize** — strips `$` / `.` operators from user input
- **xss-clean** — sanitizes input against XSS payloads
- **bcryptjs** — passwords are salted + hashed, never stored in plain text
- **JWT expiry** — access & refresh tokens both expire
- **Centralized error handler** — no stack traces leaked in production

---

## Extra Features Implemented

- Pagination, sorting, search & filtering on products/users/orders
- Image upload via Multer, served from `/uploads`
- Product ratings (embedded reviews array + aggregate `rating` field)
- Stock management (decremented on order, restored on cancel)
- Soft delete for categories & products (`isDeleted` flag)
- Slug generator for categories & products
- Centralized error handling + 404 handler
- Request logging via Morgan (dev mode)

---

## Notes for React Developers

- All endpoints are prefixed with `/api`.
- CORS is configured to allow the origin set in `CLIENT_URL` — update this to your React dev server URL (e.g. `http://localhost:3000` or `http://localhost:5173` for Vite).
- Store the `accessToken` from login/register in memory or `httpOnly` storage on the frontend, and attach it as a `Bearer` token on every authenticated request (e.g. via an Axios interceptor).
- Uploaded images are accessible at `http://localhost:5000/uploads/<filename>`.
