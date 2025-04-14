import React, { useEffect, useState } from "react";
import { createTheme, FloatingLabel } from "flowbite-react";
import { Plus } from "lucide-react";
import Todo from "./todo";

function ListTodo({ listTodo, handlePostTodo, responsePostTodo }) {
  const [makeTodo, setmakeTodo] = useState("");

  useEffect(() => {
    if (responsePostTodo) {
      setmakeTodo("");
    }
  }, [responsePostTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePostTodo(makeTodo);
  };

  const customThemeInput = createTheme({
    input: {
      default: {
        standard: {
          sm: `peer block w-full appearance-none border-0 border-b-2 focus:border-b-2 ${
            makeTodo ? "border-gray-400" : "border-transparent"
          } bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-transparent dark:text-black dark:focus:border-gray-500`,
          md: `peer block w-full appearance-none border-0 border-b-2 focus:border-b-2 ${
            makeTodo
              ? "border-gray-400 focus:border-gray-500"
              : "border-transparent"
          } bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 ${
            makeTodo
              ? "dark:border-gray-400 focus:border-gray-500"
              : "dark:border-transparent"
          } dark:text-black dark:focus:border-gray-500`,
        },
      },
    },
    label: {
      default: {
        standard: {
          sm: "absolute top-2.5 -z-10 origin-[0] -translate-y-6 scale-75 text-xs font-medium text-gray-400 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500 dark:text-gray-400 peer-focus:dark:text-gray-500",
          md: "absolute top-2.5 -z-10 origin-[0] -translate-y-6 scale-75 text-sm font-medium text-gray-400 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500 dark:text-gray-400 peer-focus:dark:text-gray-500",
        },
      },
    },
  });

  return (
    <ul className="space-y-4">
      {listTodo.map((data, index) => (
        <Todo key={data.id} data={data} index={index} />
      ))}
      <li className="relative group flex items-center gap-2">
        <Plus className="w-6 h-6 text-gray-400 group-has-focus:text-gray-500" />
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            theme={customThemeInput}
            variant="standard"
            label="Make todo"
            value={makeTodo}
            onChange={(e) => setmakeTodo(e.target.value)}
          />
        </form>
      </li>
    </ul>
  );
}

export default ListTodo;
