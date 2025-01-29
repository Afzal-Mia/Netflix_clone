# 🎬 Netflix Clone 🍿

## 📸 Preview
### Netflix Clone UI 🖼
![Preview 1](./frontend/Net_pre_1.png)
![Preview 2](./frontend/Net_pre_2.png)
![Preview 3](./frontend/Net_pre_3.png)
![Preview 4](./frontend/Net_pre_4.png)
![Preview 5](./frontend/Net_pre_5.png)
![Preview 6](./frontend/Net_pre_6.png)

## 🚀 Overview
This is a full-stack **Netflix clone** built with modern web technologies, providing an immersive movie-watching experience. The project includes **authentication**, **movie & TV show browsing**, **search functionality**, and **user-protected routes**.

---

## 🌟 Features
✅ **User Authentication** (Login/Register) 🔑
✅ **Browse Movies & TV Shows** 🎥📺
✅ **Search Functionality** 🔍
✅ **Protected Routes** (Only logged-in users can access certain features) 🔐
✅ **Backend API** for movies, TV shows, and authentication ⚙️
✅ **Responsive Frontend** built with React and Tailwind CSS 🎨
✅ **State Management** using Zustand ⚡

---

## 🛠️ Tech Stack
### 🎭 Frontend
- ⚛ **React**
- 🎨 **Tailwind CSS**
- 📌 **Zustand (State Management)**
- 🌍 **React Router**
- 🌐 **Axios**
- 🎶 **React Player**
- 🔥 **React Hot Toast**

### 🔥 Backend
- 🏗 **Node.js & Express.js**
- 🛢 **MongoDB & Mongoose**
- 🔑 **JSON Web Tokens (JWT) for authentication**
- 🛠 **bcryptjs for password hashing**
- 🔐 **Cookie parser for authentication**
- 🌿 **dotenv for environment variables**

---

## 📥 Installation
### 🔧 Prerequisites
Make sure you have installed:
- 🖥 **Node.js**
- 📦 **npm or yarn**
- 🗄 **MongoDB**

### 📂 Clone Repository
```sh
 git clone https://github.com/yourusername/netflix-clone.git
 cd netflix-clone
```

### 🛠 Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add your environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
TMDB_API_KEY=your_tmdb_api_key
```
Start the backend server:
```sh
npm run dev
```

### 🎨 Frontend Setup
```sh
cd frontend
npm install
```
Start the frontend server:
```sh
npm run dev
```

---

## 🚀 Build & Deployment
To build the frontend and backend, run:
```sh
npm run build
```
To start the production server:
```sh
npm start
```

---

## 📂 Folder Structure
```
netflix-clone/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── dist/
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## 🔥 API Endpoints
### 🔑 Auth Routes
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/logout` - Logout user

### 🎥 Movie Routes (Protected)
- `GET /api/v1/movie` - Fetch popular movies
- `GET /api/v1/movie/:id` - Fetch movie details

### 📺 TV Show Routes (Protected)
- `GET /api/v1/tv` - Fetch popular TV shows
- `GET /api/v1/tv/:id` - Fetch TV show details

### 🔎 Search (Protected)
- `GET /api/v1/search?q=query` - Search for movies or TV shows

---



---

## 🤝 Contributing
Contributions are welcome! 🎉 Fork the repository and submit a pull request.

---

## 📜 License
This project is licensed under the **MIT License**. 📜

---

🚀 **Enjoy Watching!** 🍿

