# Healthy Meals E-Commerce — React & Stripe

A full-stack e-commerce web application for healthy meal plans and nutrition programs. Built as a **graduation project**, it lets users browse meals, manage a cart, complete checkout with **Stripe**, and use a personalized dashboard with schedules and coaches.

---

## Overview

The application focuses on changing eating habits through curated meal plans. Users can explore a meal menu, add items to the cart, create a Stripe checkout session, and after login access a dashboard with schedules, coach info, and settings.

---

## Tech Stack

| Category      | Technologies |
|---------------|--------------|
| **Frontend**  | React 18, Vite |
| **State**     | Redux Toolkit (auth, cart, meals) |
| **Routing**   | React Router v6 |
| **Styling**   | Tailwind CSS, CSS Modules, Styled Components, DaisyUI |
| **UI**        | Headless UI, Heroicons, Flowbite, Splide, Swiper, React Slick |
| **HTTP**      | Axios |
| **Auth**      | JWT (jwt-decode), token in localStorage |
| **Payments**  | Stripe (checkout session via backend API) |
| **Notifications** | React Toastify |

---

## Features

- **Landing page** — Hero, programs, and calls-to-action (e.g. “Explore menu”).
- **Authentication** — Register and Login with JWT; protected routes.
- **Meals** — Browse meal catalog; add to cart with quantity.
- **Cart & checkout** — Cart state (add/remove/quantity), then redirect to Stripe Checkout via backend (`/stripe/create-checkout-session`).
- **Post-payment** — Success (`/checkout-success`) and cancel (`/cancel`) pages.
- **Multi-step flow (Stepper)** — Onboarding/questionnaire (e.g. Beginning → steps 1–11 → Last); requires login.
- **User dashboard** — Schedules, schedule details, coach view, and settings.
- **Coaches** — Coaches listing and coach detail view.
- **Contact** — Contact us page.
- **404** — Not found handling for unknown routes.

---

## Project Structure (main frontend)

```text
src/
├── App.jsx                 # Routes and layout
├── main.jsx                # Redux Provider, StepContext, root render
├── stepContext.jsx         # Multi-step (Stepper) context
├── components/
│   ├── auth/               # Register, Login, StyledForm
│   ├── dashboard/          # Dashboard layout
│   ├── details/            # Schedule details, Check
│   ├── schedules/          # Schedules, Day
│   ├── coach/              # Coach view
│   ├── contactUs/          # Contact page
│   ├── Settings/           # User settings
│   ├── Sider/              # Sidebar
│   ├── Navbar.jsx
│   ├── Landing.jsx
│   ├── Meals.jsx, MealCard, MealCarousel
│   ├── Stepper.jsx         # Multi-step flow (FirstStep … ElevenStep, Last)
│   ├── Cart.jsx
│   ├── PayButton.jsx       # Stripe checkout trigger
│   ├── Checking.jsx        # Checkout success
│   ├── Cancel.jsx          # Checkout cancelled
│   └── ...
├── redux/
│   ├── store.js
│   ├── slices/
│   │   ├── authSlice.jsx
│   │   ├── cartSlice.jsx
│   │   ├── mealsSlice.jsx
│   │   ├── mealsApi.jsx
│   │   └── api.jsx         # Base URL, auth headers
│   └── ...
└── Axios/
    └── instance.js         # Axios instance
```

---

## Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **Backend API** running (see below) with Stripe integration

---

## Installation & Run

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd simple_React_ecommerce_with_stripe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure API base URL**

   The app expects the backend at `http://localhost:3000/api` by default.  
   Edit `src/redux/slices/api.jsx` if your API runs on a different host/port:

   ```js
   export const url = "http://localhost:3000/api";
   ```

4. **Start the backend**

   Ensure your backend server is running and exposes at least:

   - Auth (register/login) and JWT handling
   - Meals (or equivalent) data
   - `POST /stripe/create-checkout-session` — creates a Stripe Checkout session and returns a `url` for redirect

5. **Start the frontend**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (e.g. `http://localhost:5173`).

---

## Available Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint               |

---

## Environment Notes

- **API URL**: Set in `src/redux/slices/api.jsx` (no `.env` in use by default).
- **Stripe**: Keys and session creation are handled by the backend; the frontend only calls `/stripe/create-checkout-session` and redirects to the returned Stripe URL.

---

## Graduation Project Context

This project was developed as a **graduation project**. It demonstrates:

- React SPA with Vite and modern tooling
- Global state with Redux (auth, cart, meals)
- JWT-based authentication and protected routes
- Integration with a backend payment API (Stripe Checkout)
- Multi-step flows (Stepper) and dashboard UX
- Responsive UI with Tailwind and component libraries

---

## License

This project is for educational and portfolio use as part of a graduation project.
