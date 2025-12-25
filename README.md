# 📘 Netflix-GPT – Project Notes

These notes document the **complete development journey** of the Netflix-GPT project.  
They are written for **future revision**, **interview preparation**, and **clear understanding of architectural decisions**.

---

## 🔹 Project Overview

Netflix-GPT is a **Netflix-inspired web application** built using **Create React App (CRA)** and styled with **Tailwind CSS**.

### Core Focus Areas
- Real-world streaming UI
- Authentication workflows
- Global state management using Redux
- AI-powered movie recommendations using TMDB API

### Development Server
- Runs on: http://localhost:3000  
- Hot reload supported on code changes  
- ESLint warnings and errors visible in the console  

---

## 🔹 Development Build Sequence (Followed as per Akshay Saini)

- Header creation
- App routing
- Login form
- Sign-up form
- Form validation
- `useRef` hook usage
- Firebase setup
- App deployment setup
- Create user account (Sign Up)
- Implement Sign In API
- Redux store creation with `userSlice`
- Sign out functionality
- User profile update
- Bug fix: profile name & image update
- Bug fix: route protection (login ↔ browse)
- Unsubscribe from `onAuthStateChanged`
- Constants file setup
- TMDB API registration & access token
- Fetch now-playing movies
- Custom hook for now-playing movies
- Create `moviesSlice`
- Store movie data in Redux
- Design MainContainer & SecondaryContainer
- Fetch trailer video
- Store trailer data in Redux
- Embed YouTube trailer (autoplay, mute)
- Netflix-style UI using Tailwind
- Build SecondaryContainer
- Build MovieList component
- Build MovieCard component
- Discover TMDB image CDN URL
- Improve Browse page UI
- Add separate hooks for different movie categories  
  (Upcoming, Trending, Popular, etc.)
- Building GPT Search Feature 

---

## 🔹 Why This Project Was Built

This project was created to:

- Understand **real-world React project structure**
- Implement **Firebase Authentication**
- Learn **protected routing**
- Manage global state using **Redux Toolkit**
- Work with **external APIs**
- Build a **Netflix-style modern UI**
- Prepare for **MERN stack internships & interviews**

---

## 🔹 Step 1: Initial Project Setup (CRA)

The project was initialized using **Create React App (CRA)**.

CRA provides:
- Webpack
- Babel
- ESLint
- Zero manual configuration

### Why CRA?
- Beginner-friendly
- Stable setup
- Easy to scale
- Common in industry tutorials

---

## 🔹 Step 2: Tailwind CSS Integration

### Why Tailwind CSS?
- Utility-first CSS framework
- Faster UI development
- Consistent spacing & colors
- Ideal for Netflix-style dark UI

### Configuration Summary
- Installed Tailwind CSS & dependencies
- Configured `tailwind.config.js`
- Added Tailwind layers:
  - `base`
  - `components`
  - `utilities`
- Updated content paths
- Configured PostCSS

**Result:** Complete styling foundation ready.

---

## 🔹 Step 3: Feature Planning & Architecture

Before writing code, features were **planned and logically separated**.

### Application States
The app operates in two major states:

1. **Unauthenticated Users**
2. **Authenticated Users**

This separation controls:
- Routing behavior
- UI rendering
- Access control
- Authentication logic

---

## 🔹 Step 4: Routing Logic

Routing is handled using **React Router DOM**.

### Defined Routes
- `/` → Login / Sign Up page
- `/browse` → Browse page (Protected)

### Routing Rules
- New users land on authentication pages
- Logged-in users can access protected routes only

---

## 🔹 Step 5: Unauthenticated User Features

### Authentication Pages
- **Sign Up** – Create a new account
- **Sign In** – Login existing users

### Behavior
- Default route `/` shows auth UI
- Successful authentication redirects to `/browse`

---

## 🔹 Step 6: Authenticated User Features

### Browse Page (Protected)
- Accessible only after login
- Unauthorized users redirected to `/`

---

## 🔹 Header Component (Core Logic Holder)

The **Header** is the most critical component.

### Responsibilities
- Display Netflix logo
- Show user avatar
- Handle sign out
- Listen to Firebase auth state
- Control navigation based on auth status

### Key Design Rule
> All authentication-based navigation happens **only inside the Header**

**Why?**
- Avoids duplicate redirects
- Prevents UI flickering
- Eliminates logic duplication

---

## 🔹 Main Movie Section (Hero Section)

- Displays featured movie
- Background trailer or image
- Title & description overlay
- Styled similar to Netflix hero banner

---

## 🔹 Step 7: Authentication & Forms

### Login Form
- Firebase Authentication
- Handles invalid credentials

### Sign-Up Form
- Firebase Authentication
- Updates:
  - Display name
  - Profile picture

### Form Validation
- Email validation
- Password validation
- User-friendly error messages

---

## 🔹 useRef Hook in Forms

Forms use `useRef` instead of controlled inputs.

### Benefits
- Avoids unnecessary re-renders
- Improves performance
- Cleaner code

---

## 🔹 Step 8: Firebase Setup & Auth Flow

### Firebase Configuration
- Firebase project setup
- Email/Password auth enabled
- SDK integrated

### Authentication Flows

#### Sign Up
1. User enters details
2. Firebase creates account
3. Profile updated
4. User stored in Redux
5. Header handles redirect

#### Sign In
1. User enters credentials
2. Firebase authenticates
3. Auth state updates
4. Redirect to `/browse`

#### Sign Out
1. User clicks sign out
2. Firebase logs out
3. Auth state cleared
4. Redirect to `/`

---

## 🔹 Step 9: Redux State Management

### Why Redux?
- Centralized state
- Avoids prop drilling
- Cleaner logic
- Scalable architecture

### Redux Store
- Created using Redux Toolkit
- `userSlice` manages user data

### Stored Data
- uid
- email
- displayName
- photoURL

---

## 🔹 Step 10: Bug Fixes & Improvements

Resolved issues:
- Duplicate navigation logic
- Auth listener memory leaks
- Signup profile update bug
- Redirect loops
- Removed hardcoded values

---

## 🔹 Step 11: Constants Management

All reusable values moved to a **constants file**.

Examples:
- Netflix logo
- Default avatar
- API config values

---

## 🔹 Step 12: Netflix-GPT (AI Features)

### Movie Search
- Keyword-based movie search

### AI-Based Recommendations
- Smart suggestions
- Powered by TMDB API

Purpose:
- Simulate AI experience
- Practice API integration

---

## 🔹 Feature Summary

### New Users
- Sign Up
- Sign In
- Auth routing

### Authenticated Users
- Browse page
- Header
- Hero section

### Netflix-GPT
- Movie search
- AI-based recommendations

---

## 🔹 Tech Stack

- React.js
- Create React App
- Tailwind CSS
- Firebase Authentication
- Redux Toolkit
- TMDB Movie API
- JavaScript (ES6+)

---

## 🔹 Final Purpose

This project helped in:
- Learning advanced React concepts
- Understanding authentication workflows
- Practicing global state management
- Working with real-world APIs
- Building production-level UI
- Preparing for MERN stack roles

---

## 👨‍💻 Author

Developed by **Ayush Pandey 🚀**
