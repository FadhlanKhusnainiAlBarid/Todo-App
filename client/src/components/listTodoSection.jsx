import React from "react";
import ListTodo from "./listTodo";

function ListTodoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-3 space-y-1 md:space-y-2 xl:space-y-3 2xl:space-y-4">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
          Make Todo
        </h1>
        <ListTodo />
      </div>
    </div>
  );
}

export default ListTodoSection;
