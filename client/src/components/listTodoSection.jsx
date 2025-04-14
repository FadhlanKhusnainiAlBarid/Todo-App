import React from "react";
import ListTodo from "./listTodo";

function ListTodoSection({ listTodo, handlePostTodo, responsePostTodo }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-3 space-y-3">
        <h1 className="text-2xl">Make Todo</h1>
        <ListTodo
          listTodo={listTodo}
          handlePostTodo={handlePostTodo}
          responsePostTodo={responsePostTodo}
        />
      </div>
    </div>
  );
}

export default ListTodoSection;
