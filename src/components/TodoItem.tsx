import React, { useState } from "react";
import { Checkbox, IconButton, Text, Input, HStack } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  // State for handling edit mode and new text for editing
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // Function to handle edit mode and save changes
  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTodo(todo.id, newText); // Call editTodo function to update text
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  return (
    <HStack spacing={4} align="center">
      {/* Checkbox for completing todo */}
      <Checkbox
        isChecked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {/* Display input field or text based on edit mode */}
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleEdit(); // Handle edit on Enter key press
          }}
        />
      ) : (
        <Text as={todo.completed ? "s" : ("" as "s" | undefined)} flex="1">
          {todo.text}
        </Text>
      )}
      {/* Edit and Delete buttons */}
      <IconButton
        aria-label="Edit Todo"
        icon={isEditing ? <CheckIcon /> : <EditIcon />}
        onClick={handleEdit}
      />
      <IconButton
        aria-label="Delete Todo"
        icon={<DeleteIcon />}
        onClick={() => deleteTodo(todo.id)}
      />
    </HStack>
  );
};

export default TodoItem;
