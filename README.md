# 🤖 Data Insights Generator

A single-page application built with **React** and **Vite** that interacts with a **FastAPI** backend to provide an interactive data insights experience.

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

## 🚀 Setup

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone <https://github.com/kkv-dinesh/Data_Insights_generator_frontend>
cd <https://github.com/kkv-dinesh/Data_Insights_generator_frontend>
```

### 2. Frontend Setup

Navigate to the `frontend` directory:

```bash
cd frontend
```

Install the required Node.js dependencies:

```bash
npm install
# or
yarn install
```

### 3. Configure API URL

The client is currently set to interact with the backend at `http://localhost:8000/api/v1/data`. If you want to change this:

* Update the backend to run at a different URL.
* Modify the frontend to point to the new API endpoint.

---

## 🏃‍♂️ Running the Application

To start the local development server, run:

```bash
npm start
```

or if you're using Yarn:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000) by default.

---

## 🔧 Backend Configuration

Ensure that your backend (FastAPI) is running at the specified API endpoint, or adjust the URL as needed in the frontend configuration.

---
