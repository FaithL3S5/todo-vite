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
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <HStack spacing={4} align="center">
      <Checkbox
        isChecked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleEdit();
          }}
        />
      ) : (
        <Text as={todo.completed ? "s" : ""} flex="1">
          {todo.text}
        </Text>
      )}
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
