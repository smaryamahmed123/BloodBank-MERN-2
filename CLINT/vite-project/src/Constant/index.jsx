// export const BASE_URL1 = "http://localhost:3000/api/auth"
// export const BASE_URL2 = "http://localhost:3000/api/form"
// export const BASE_URL3 = "http://localhost:3000/api/forms"

// constant.jsx

// constant.jsx

export const BASE_URL1 = import.meta.env.VITE_REACT_APP_BASE_URL1 || 'http://localhost:3000/api/auth';
export const BASE_URL2 = import.meta.env.VITE_REACT_APP_BASE_URL2 || 'http://localhost:3000/api/form';
export const BASE_URL3 = import.meta.env.VITE_REACT_APP_BASE_URL3 || 'http://localhost:3000/api/forms';
