import React, { useState, useEffect } from "react";
import { Button, Input, VStack, Heading, HStack } from "@chakra-ui/react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

const LOCAL_STORAGE_KEY = "todos";

const TodoApp: React.FC = () => {
  // State for managing todos, initialized from local storage
  const [todos, setTodos] = useState<Todo[]>(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  });

  // Effect to save todos to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo item
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]); // Update todos state with new item
    setNewTodo(""); // Clear input field after adding todo
  };

  // Function to toggle completion status of a todo item
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to edit the text of a todo item
  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // State for managing new todo input field
  const [newTodo, setNewTodo] = useState("");

  return (
    <VStack spacing={4} width="100%">
      {/* Heading for the Todo App */}
      <Heading as="h1" size="lg" mb={4}>
        To-Do List
      </Heading>
      {/* Input field and button for adding new todos */}
      <HStack spacing={2} mb={4} width="100%">
        <Input
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          flex="1"
        />
        <Button onClick={addTodo} colorScheme="teal">
          Add Task
        </Button>
      </HStack>
      {/* Display todos using TodoItem component */}
      <VStack spacing={2} align="stretch" width="100%">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default TodoApp;
