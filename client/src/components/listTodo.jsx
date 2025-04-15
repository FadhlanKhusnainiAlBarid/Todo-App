import React, { useEffect, useState, useRef } from "react";
import { createTheme, FloatingLabel } from "flowbite-react";
import { Plus, CircleAlert, ChevronRight } from "lucide-react";
import Todo from "./todo";
import TodoCompleted from "./todoCompleted";
import { Button } from "flowbite-react";
// import { DragDropProvider } from "@dnd-kit/react";
import useListTodo from "../hooks/useListTodo";

function ListTodo() {
  const {
    listTodo,
    handlePostTodo,
    responsePostTodo,
    isError,
    massageError,
    handleDelete,
    handleUpdate,
    handleCompleted,
  } = useListTodo();
  const [makeTodo, setmakeTodo] = useState("");
  const [dropDownCompleted, setdropDownCompleted] = useState(false);
  const listContainer = useRef();
  // const { handleChangeSortable } = useListTodo();

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

  // const handleChangeSortable = (source, target, from, to) => {
  //   let newArray;

  //   newArray = data.map((data) =>
  //     data.id === source.id
  //       ? { ...data, todo: to.todo }
  //       : data || data.id === target.id
  //       ? { ...data, todo: from.todo }
  //       : data
  //   );

  //   setdata(newArray);
  // };

  return (
    <ul className="space-y-4" ref={listContainer}>
      {/* <DragDropProvider
        onDragOver={(e) => {
          console.log(listTodo);
          const { operation } = e;
          const { source, target } = operation;
          if (source.id === target.id) {
            return;
          }

          console.log(source.id, target.id);

          const from = listTodo.find((i) => i.id === source.id);
          const to = listTodo.find((i) => i.id === target.id);
          setTimeout(() => {
            handleChangeSortable(source, target, from, to);
          }, 2000);
          // console.log(from, to);

          // newArray = newArray.map((data) =>
          //   data.id === target.id ? { ...data, todo: from.todo } : data
          // );
        }}
      > */}
      {listTodo?.map(
        (data, index) =>
          data.completed === false && (
            <Todo
              key={data.id}
              data={data}
              index={index}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              isError={isError}
            />
          )
      )}
      {/* </DragDropProvider> */}
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
          {isError.postError && (
            <div className="flex items-center mt-1 gap-1.5 text-red-600">
              <CircleAlert />
              <span>{isError.massageErrorPost}</span>
            </div>
          )}
        </form>
      </li>
      {listTodo?.find((data) => data.completed === true) && (
        <li>
          <Button
            onClick={() => setdropDownCompleted(!dropDownCompleted)}
            className="cursor-pointer gap-1"
          >
            <ChevronRight className="w-5 h-5" />
            completed
          </Button>
        </li>
      )}
      {dropDownCompleted &&
        listTodo?.map(
          (data) =>
            data.completed === true && (
              <TodoCompleted key={data.id} data={data} />
            )
        )}
    </ul>
  );
}

export default ListTodo;
