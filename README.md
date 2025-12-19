# 🎬 Netflix-GPT (Project Documentation)

Netflix-GPT is a Netflix-inspired web application built using **Create React App** and styled with **Tailwind CSS**.  
The project focuses on creating a modern streaming UI combined with **AI-powered movie suggestions**.

---

## 🚀 Project Overview

- The application runs in **development mode** on `http://localhost:3000`.
- Any changes made to the source code automatically refresh the browser.
- Linting errors and warnings appear in the console to help maintain clean and readable code.

---

## 📝 Step-by-Step Project Notes

This section documents the complete setup and development process of the Netflix-GPT project in a clear and structured manner.

---

## ⭐ Step 1: Initial Setup

### ✔ Create React App (CRA)
- The project was initialized using **Create React App** to ensure a stable and beginner-friendly React setup.

### ✔ Tailwind CSS Integration
Tailwind CSS was added for modern, utility-first styling.

**Configuration steps included:**
- Installing Tailwind CSS and its dependencies
- Configuring Tailwind config files
- Adding Tailwind’s `base`, `components`, and `utilities` layers
- Updating content paths for CRA compatibility
- Adjusting PostCSS configuration

This completed the styling foundation of the project.

---

## ⭐ Step 2: Feature Planning & App Structure

Before development, all features were planned and documented to maintain a clean architecture.

---

## 🔀 Routing of the Application

The app uses routing to manage authenticated and unauthenticated user flows.

---

## 👤 Features for New Users (Unauthenticated)

### 🔐 Authentication Pages
- **Sign Up Page** → For new users
- **Sign In Page** → For existing users

### 🔁 Routing Behavior
- New users are shown authentication pages by default.
- After successful authentication, users are redirected to the **Browse Page**.

---

## 👥 Features for Logged-In Users (Authenticated)

### 🧭 Browse Page (Protected Route)
- Accessible only after successful login.
- Prevents unauthorized access.

### 🧩 Header Section
Includes:
- Application logo
- Navigation links
- User profile section

### 🎥 Main Movie Section (Hero Section)
- Background movie trailer
- Movie title and short description overlay
- Styled similar to Netflix’s main landing section

---

## 🔑 Authentication & Forms

### 🧾 Login Form
- Allows existing users to sign in using Firebase Authentication.

### 🆕 Sign Up Form
- Enables new users to create an account.
- Firebase authentication used for secure user creation.

### ✅ Form Validation
- Input validation for email and password
- Error handling for invalid credentials

### 🪝 useRef Hook
- Used for efficient form handling
- Avoids unnecessary re-renders
- Improves performance and cleaner code

---

## 🔥 Firebase Setup & Deployment

- Firebase project created
- Firebase Authentication configured
- App connected to Firebase
- Production deployment completed
- GitHub integration enabled for deployment workflows


### Implemented Sing In user Api


### Create User Account

###  Create Redux Store wiht userSlice
### Implemented Sing out
### Updated Profile
### Bufguix : Sing up[ user displayname and profile picture updated 
### Buif gix if the user is not logged in redirect / browse to login page vice versa]
### Unsubsrivbe on auth state change 
### Add Hardcoded values to constant files 
---

## 🤖 Netflix-GPT (AI-Based Features)

### 🔍 Movie Search Bar
- Users can search for movies using keywords.

### 🎯 Movie Recommendations
- AI-style suggestions based on search input
- Powered using TMDB API data

---

## 🧩 Summary of All Features

| Category | Features |
|--------|---------|
| New Users | Sign In, Sign Up, Authentication Routing |
| Authenticated Users | Protected Browse Page, Header, Hero Section |
| Netflix-GPT | Movie Search, AI-Based Recommendations |

---

## 🛠️ Tech Stack

- React.js  
- Create React App  
- Tailwind CSS  
- Firebase Authentication  
- TMDB Movie API  
- JavaScript (ES6+)  

---

## 📄 Purpose of the Project

This project is built to:
- Learn advanced React concepts
- Understand authentication workflows
- Work with external APIs (TMDB)
- Build clean UI using Tailwind CSS
- Prepare for MERN stack internships and real-world projects

---

## 🙌 Author

Developed by **Ayush Pandey** 🚀
