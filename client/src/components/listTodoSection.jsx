import React from "react";
import ListTodo from "./listTodo";

function ListTodoSection({ listTodo }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-3 space-y-3">
        <h1>Make Todo</h1>
        <ListTodo listTodo={listTodo} />
      </div>
    </div>
  );
}

export default ListTodoSection;
