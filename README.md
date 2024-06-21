---

# Simple Todo App

This is a responsive Web App built using React, TypeScript, Vite, Chakra UI, and local storage integration. The app allows users to manage their tasks efficiently with features like adding, editing, completing, and deleting tasks. Additionally, it includes a data fetching component that retrieves and displays posts from an external API.

## Features

- **Add Tasks**: Users can enter new tasks into the input field and click "Add Task" to add them to the list. Added tasks persist even after page refresh.
  
- **Edit Tasks**: Each task can be edited by clicking on the edit button, modifying the task text, and confirming the changes.
  
- **Complete Tasks**: Tasks can be marked as completed by checking the checkbox next to each task. Completed tasks are visually distinguished (strikethrough text) and retain their state between sessions.
  
- **Delete Tasks**: Users can remove tasks from the list by clicking on the delete button associated with each task.
  
- **Data Fetching**: The app includes a component that fetches and displays the most recent posts from an external API. Users can navigate through pages of posts using pagination controls.

## Technologies Used

- **React**: Front-end library for building user interfaces.
  
- **TypeScript**: Typed superset of JavaScript for improved code quality and developer experience.
  
- **Vite**: Fast build tool for modern web development, providing instant server start and hot module replacement.
  
- **Chakra UI**: Component library for React that provides customizable and accessible UI components.
  
- **Local Storage**: Browser feature used to persist tasks between sessions.
  
- **Fetch API**: Built-in web API used for making asynchronous HTTP requests to fetch data from the external API.

## Getting Started

To run the app locally:

1. Clone this repository.
  
2. Install dependencies using `npm install`.
  
3. Start the development server with `npm run dev`.
  
4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Folder Structure

- **src/**: Contains the source code files.
  - **components/**: React components including TodoApp, TodoItem, and DataFetcher.
  - **types/**: TypeScript type definitions used in the app.
  
- **public/**: Contains static assets and the index.html file.

## Additional Notes

- This app demonstrates the implementation of basic CRUD operations for managing tasks in a todo list.
  
- The DataFetcher component showcases data fetching from an external API with pagination controls.
  
- Responsive design ensures the app is usable across different screen sizes and devices.

---
