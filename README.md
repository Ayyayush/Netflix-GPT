# 🎬 Netflix-GPT (Project Documentation)

This project is built using **Create React App** and styled with **Tailwind CSS**.  
The goal of the project is to build a Netflix-like UI with AI-powered movie suggestions.

---

# 🚀 Project Overview

The app starts in development mode and runs on **localhost:3000**.  
Changes made in the project refresh automatically, and lint errors appear in the console to help maintain clean code.

---

# 📝 Step-by-Step Project Notes

This section explains everything done during the setup and development of the project, in a clean and organized format.

---





# ⭐ Step-1: Initial Setup (Summary)

### ✔ Create React App  
The project was initialized using CRA to provide a simple, stable foundation for React applications.

### ✔ Tailwind CSS Integration  
Tailwind CSS was added to the project for modern, utility-first styling.

- Project files were configured for Tailwind.
- Tailwind’s base, components, and utility layers were added to the main stylesheet.
- Tailwind content paths were updated for CRA compatibility.
- PostCSS configuration was adjusted to support Tailwind inside CRA.

This completed the styling setup for the project.

---





# ⭐ Step-2: Feature Planning & App Structure

Below are the full features planned and documented for the Netflix GPT project.

---

# 👤 Features for New Users (Unauthenticated Users)

### 🔹 Authentication Pages
- A **Sign Up** page for new users.
- A **Sign In** page for existing users.

### 🔹 Routing Behavior
- New users see authentication pages first.
- They will be redirected to the **Browse Page** only after successful login.

---





# 👥 Features for Logged-In Users (Authenticated Users)

### 🔹 Browse Page  
A protected route that only authenticated users can view.

### 🔹 Header Section
- App logo
- Navigation links
- User profile area

### 🔹 Main Movie Section
Includes:
- A movie trailer displayed in the background  
- Title and short description shown on top  
- Designed to look like Netflix’s main hero section  

These features are accessible **only after authentication**.

---


### Login Form



# 🤖 Netflix GPT Features (AI-ish Movie Features)

### 🔍 Search Bar
Allows users to search for movies.

### 🎯 Movie Suggestions
Provides a recommendation list based on search terms.

---







# 🧩 Summary of All Features

| Category | Features |
|----------|----------|
| New Users | Sign In, Sign Up, Redirection to Browse |
| Authenticated Users | Protected Browse Page, Header, Movie Trailer Section |
| Netflix GPT | Search Bar, Movie Suggestions |

---

# 🛠️ Tech Stack (Non-Code Summary)

- React.js  
- Create React App  
- Tailwind CSS  
- Firebase Authentication  
- TMDB Movie API  
- JavaScript (ES6+)

---

# 📄 Purpose of Project

This project is created for:
- Learning advanced React concepts  
- Understanding authentication flows  
- Working with external APIs (TMDB)  
- Styling with Tailwind CSS  
- Preparing for full-stack MERN internships and projects  

---

# 🙌 Author

Developed by **Ayush Pandey**.

---

