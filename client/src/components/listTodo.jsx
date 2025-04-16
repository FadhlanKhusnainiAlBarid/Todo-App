import React, { useEffect, useState, useRef } from "react";
import { FloatingLabel } from "flowbite-react";
import { Plus, CircleAlert, ChevronRight, ChevronDown } from "lucide-react";
import Todo from "./todo";
import TodoCompleted from "./todoCompleted";
import { Button } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
// import { DragDropProvider } from "@dnd-kit/react";
import useListTodo from "../hooks/useListTodo";
import { customThemeInput } from "../assets/customTheme";

function ListTodo() {
  const {
    listTodo,
    handlePostTodo,
    responsePostTodo,
    isError,
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
    if (makeTodo.length >= 3) {
      toast.success("Success Make New Todo!", {
        position: "top-right",
      });
    }
  };

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
    <>
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
          <Plus className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10 text-gray-400 group-has-focus:text-gray-500" />
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              theme={customThemeInput}
              variant="standard"
              label="Make todo"
              color={isError.postError ? "error" : "default"}
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
              clearTheme
              onClick={() => setdropDownCompleted(!dropDownCompleted)}
              className={`flex items-center cursor-pointer gap-1 pr-2.5 py-1.5 border-2 ${
                dropDownCompleted ? "border-black" : "border-gray-400"
              } rounded-xl`}
            >
              {dropDownCompleted ? (
                <ChevronDown className="w-6 h-5 md:w-7 md:h-7 xl:w-10 xl:h-7 text-black" />
              ) : (
                <ChevronRight className="w-6 h-5 md:w-7 md:h-7 xl:w-10 xl:h-7 text-gray-400" />
              )}
              <span
                className={`text-base md:text-xl xl:text-3xl font-normal ${
                  dropDownCompleted ? "text-black" : "text-gray-400"
                } `}
              >
                Completed
              </span>
            </Button>
          </li>
        )}
        {dropDownCompleted &&
          listTodo?.map(
            (data) =>
              data.completed === true && (
                <TodoCompleted
                  key={data.id}
                  data={data}
                  handleCompleted={handleCompleted}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  isError={isError}
                />
              )
          )}
      </ul>
      <ToastContainer />
    </>
  );
}

export default ListTodo;
