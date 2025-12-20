# 📘 Netflix-GPT – Project Notes

These notes document the **complete development journey** of the Netflix-GPT project.  
They are written for **future revision**, **interview preparation**, and **clear understanding of architecture decisions**.

---

## 🔹 Project Overview

Netflix-GPT is a **Netflix-inspired web application** built using **Create React App (CRA)** and styled with **Tailwind CSS**.

Focus areas of the project:
- Real-world streaming UI
- Authentication workflows
- Global state management
- AI-powered movie recommendations using TMDB API

Development Server:
- Runs on: http://localhost:3000
- Supports hot reload on code changes
- ESLint errors and warnings visible in console

---

## 🔹 Development Build Sequence (Followed as per Akshay Saini)

- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Signup User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Added hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API and
- Custom Hook for now playing movies
- Create movieSlice
- Update Store with movies  data
- Planning for MainContainer & Secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video data 
- Embedded the Youtube Video and autoplay it as mute 
- Tailwind classes to give netflix look to maincontainer
- Build Secondary Component





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

Reason for choosing CRA:
- Beginner-friendly
- Stable setup
- Easy to scale
- Commonly used in industry tutorials

---

## 🔹 Step 2: Tailwind CSS Integration

### Why Tailwind CSS?
- Utility-first CSS framework
- Faster UI development
- Consistent spacing and colors
- Ideal for Netflix-style dark UI

### Configuration Summary
- Installed Tailwind CSS & dependencies
- Configured `tailwind.config.js`
- Added Tailwind layers:
  - base
  - components
  - utilities
- Updated content paths for CRA
- Configured PostCSS

Result:
- Complete styling foundation ready

---

## 🔹 Step 3: Feature Planning & Architecture

Before writing code, features were **planned and logically separated**.

### Application States

The app works in **two major states**:

1. Unauthenticated Users  
2. Authenticated Users  

This separation controls:
- Routing behavior
- UI rendering
- Access control
- Authentication logic

---

## 🔹 Step 4: Routing Logic

Routing is handled using **React Router DOM**.

Defined Routes:
- `/` → Login / Sign Up Page
- `/browse` → Browse Page (Protected Route)

Routing Rules:
- New users always land on authentication pages
- Logged-in users can access protected content only

---

## 🔹 Step 5: Unauthenticated User Features

### Authentication Pages

- **Sign Up**
  - Create new account
- **Sign In**
  - Login existing users

Routing Behavior:
- Default route `/` shows auth UI
- After successful authentication → redirect to `/browse`

---

## 🔹 Step 6: Authenticated User Features

### Browse Page (Protected Route)

- Accessible only after login
- Prevents unauthorized access
- If user is not logged in → redirected to `/`

---

## 🔹 Header Component (Core Logic Holder)

The **Header** is the most critical component in the app.

Responsibilities:
- Display Netflix logo
- Show user profile avatar
- Handle Sign Out
- Listen to Firebase auth state
- Control navigation based on auth status

### Key Design Rule

> All authentication-based navigation happens **only inside the Header**

Why:
- Avoids duplicate redirects
- Prevents auth flickering
- Eliminates logic duplication

---

## 🔹 Main Movie Section (Hero Section)

- Displays featured movie
- Background movie trailer or image
- Movie title and description overlay
- Styled similar to Netflix landing page

---

## 🔹 Step 7: Authentication & Forms

### Login Form
- Existing users sign in
- Uses Firebase Authentication
- Handles invalid credential errors

### Sign Up Form
- New users create account
- Uses Firebase Authentication
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

Benefits:
- Avoids unnecessary re-renders
- Improves performance
- Keeps code clean

---

## 🔹 Step 8: Firebase Setup & Auth Flow

### Firebase Configuration
- Firebase project created
- Authentication enabled
- Email/Password sign-in configured
- Firebase SDK integrated

### Authentication Flow

#### Sign Up Flow
1. User enters name, email, password
2. Firebase creates account
3. User profile updated
4. User stored in Redux
5. Auth listener redirects user

#### Sign In Flow
1. User enters credentials
2. Firebase authenticates
3. Auth state updates
4. Header redirects to `/browse`

#### Sign Out Flow
1. User clicks Sign Out
2. Firebase signs out
3. Auth state becomes null
4. Header redirects to `/`

---

## 🔹 Step 9: Redux State Management

### Why Redux?
- Centralized global state
- Avoids prop drilling
- Clean conditional rendering
- Scalable architecture

### Redux Store
- Created using Redux Toolkit
- `userSlice` manages user data

Stored Data:
- uid
- email
- displayName
- photoURL

Actions:
- addUser
- removeUser

---

## 🔹 Step 10: Bug Fixes & Improvements

Major issues resolved:
- Removed duplicate navigation logic
- Properly unsubscribed auth listeners
- Fixed signup profile update bug
- Solved redirect loop issues
- Removed hardcoded values

---

## 🔹 Step 11: Constants Management

All reusable static values moved to a **constants file**.

Examples:
- Netflix logo URL
- Default user avatar
- Static config values

Benefits:
- Cleaner code
- Centralized updates
- Better maintainability

---

## 🔹 Step 12: Netflix-GPT (AI Features)

### Movie Search
- Users search movies using keywords

### AI-Based Recommendations
- Smart suggestions based on input
- Powered by TMDB Movie API

Purpose:
- Simulate AI experience
- Practice API integration

---

## 🔹 Feature Summary

**New Users**
- Sign In
- Sign Up
- Authentication routing

**Authenticated Users**
- Protected Browse Page
- Header
- Hero Section

**Netflix-GPT**
- Movie Search
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
