# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




✅ 1. Project Structure for Scalability



src/
├── assets/             # Images, fonts , icon
├── components/         # Shared reusable UI components
├── pages/              # Route-level components
├── routes/             # AppRoutes.jsx
├── services/           # API logic (Axios) 
├── store/              # Redux store configuration
├── utils/              # Helper functions
├── constants/          # Static values, enums, configs
├── hooks/              # Custom React hooks
├── App.jsx
└── main.jsx 



✅ 3. Install Core Third-Party Libraries

# UI Framework (Pick ONE)
npm install bootstrap               # Bootstrap
# OR
npm install @mui/material @emotion/react @emotion/styled  # Material UI
# OR
npm install antd                    # Ant Design

# Routing
npm install react-router-dom

# State Management
npm install @reduxjs/toolkit react-redux

# HTTP Requests
npm install axios

# Form Handling & Validation
npm install react-hook-form yup @hookform/resolvers

# Date Handling
npm install dayjs

# Toast Notifications
npm install react-toastify

# Animations (Optional)
npm install framer-motion
