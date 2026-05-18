# TaskHive 
A fully functional and responsive Todo List web app built with React, Tailwind CSS and DaisyUI. Supports complete CRUD operations, task filtering and Light/Dark mode toggle.

## Live Demo
https://todo-app-react-cyan-three.vercel.app/

## Screenshots
(./src/assets/todo-screenshot-01.png)
(./src/assets/todo-screenshot-02.png)

## Features
- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed with strikethrough
- Filter todos by **All / Active / Completed**
- Light / Dark mode toggle
- Prevents adding empty todos

## Tech Stack

| Technology | Usage |
|------------|-------|
| React | Frontend framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| DaisyUI | UI Components |
| React Hooks | State management(useState) |
| Vercel | Deployment |


## Project Structure

react-todo-app/
├── src/
│   ├── assets/
│   │   └── todo-icon.jpg
│   ├── Navbar.jsx
│   ├── Todosec.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
└── package.json

## Concepts Used
- React Functional Components
- React Hooks (`useState`)
- Props drilling (mode, toggle)
- Array methods (`filter`, `map`)
- Conditional rendering
- Controlled inputs (`value`, `checked`)
- Light/Dark theming via props

## License
This project is open source and available under the MIT License.