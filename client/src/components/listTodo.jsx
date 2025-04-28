import React, { useEffect, useState, useRef } from "react";
import { FloatingLabel } from "flowbite-react";
import { Plus, CircleAlert, ChevronRight, ChevronDown } from "lucide-react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Todo from "./todo";
import TodoCompleted from "./todoCompleted";
import { Button } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import useListTodo from "../hooks/useListTodo";
import { customThemeInput } from "../assets/customTheme";
import axios from "axios";

function ListTodo() {
  const {
    listTodo,
    setlistTodo,
    handlePostTodo,
    responsePostTodo,
    isError,
    handleDelete,
    handleUpdate,
    handleCompleted,
  } = useListTodo();
  const [makeTodo, setmakeTodo] = useState("");
  const [dropDownCompleted, setdropDownCompleted] = useState(false);

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

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = listTodo.findIndex((item) => item.id === active.id);
      const newIndex = listTodo.findIndex((item) => item.id === over.id);

      const newTodos = arrayMove(listTodo, oldIndex, newIndex).map(
        (item, index) => ({
          ...item,
          order: index, // Update order baru berdasarkan index
        })
      );

      setlistTodo(newTodos);

      // Sekarang update ke json-server
      try {
        for (const todo of newTodos) {
          await axios.patch(`http://localhost:3000/todos/${todo.id}`, {
            order: todo.order,
          });
        }
      } catch (error) {
        console.error("Error updating todos order:", error);
      }
    }
  };

  const activeTodos = listTodo.filter((item) => !item.completed);

  return (
    <>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={activeTodos.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="space-y-4">
            {listTodo?.map(
              (data, index) =>
                data.completed === false && (
                  <Todo
                    key={data.id}
                    id={data.id}
                    data={data}
                    index={index}
                    handleCompleted={handleCompleted}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    isError={isError}
                  />
                )
            )}
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
        </SortableContext>
      </DndContext>
      <ToastContainer />
    </>
  );
}

export default ListTodo;