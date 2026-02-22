# 🚀 GitHub Profile Search Application

A responsive web application that allows users to search for GitHub profiles and view their public information such as avatar, bio, followers, following, and latest repositories using the GitHub REST API.

---

## 📌 Project Overview

This project is a frontend-based application built using HTML, CSS, and JavaScript. It integrates with the GitHub REST API to fetch real-time data of any GitHub user.

When a user enters a GitHub username:
- The application fetches profile data.
- Displays user details dynamically.
- Shows the latest 5 repositories.
- Handles invalid usernames with proper error messages.

---

## 🎯 Project Objective

The objective of this project is to practice API integration, asynchronous JavaScript, and dynamic DOM manipulation while building a real-world frontend application.

---

## ✨ Features

- 🔍 Search any GitHub username
- 👤 Display profile picture and bio
- 👥 Show followers and following count
- 📦 Display public repository count
- ⭐ Show latest 5 repositories
- ❌ Error handling for invalid usernames
- 📱 Responsive design (Mobile friendly)
- 🎨 Clean UI with hover animations

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Flexbox & Responsive Design)
- JavaScript (ES6)
- Axios (for API calls)
- GitHub REST API (for fetching user profile and repository data)

---

## 🌐 API Endpoints Used

GET https://api.github.com/users/{username}

GET https://api.github.com/users/{username}/repos?sort=created

---

## ⚙️ How the Project Works

1. The user enters a GitHub username.
2. A form submission event is triggered.
3. Axios sends an HTTP GET request to the GitHub API.
4. The response data is dynamically injected into the DOM.
5. The latest 5 repositories are displayed as clickable links.
6. If the username does not exist, an error message is shown.

---

## ▶️ How to Run This Project

### 1️⃣ Clone the repository
git clone https://github.com/aanchal2006-dubey/github-profile-search.git

### 2️⃣ Navigate into the folder
cd github-profile-search

### 3️⃣ Open index.html in your browser
No server setup required.

---

## 🎯 Learning Outcomes

- API Integration using Axios
- Asynchronous JavaScript (Promises)
- DOM Manipulation
- Event Handling
- Error Handling
- Responsive Web Design
- Dynamic Content Rendering

---

## 🚀 Future Improvements

- Add loading spinner
- Add dark mode
- Show repository stars and forks
- Add pagination
- Convert to React version
- Improve accessibility

---

## 👩‍💻 Author

Aanchal Dubey  
Aspiring Full Stack Developer  

---

## ⭐ Support

If you like this project, please consider giving it a star ⭐ on GitHub.

---

## 📜 License

This project is open-source and available for learning purposes.
