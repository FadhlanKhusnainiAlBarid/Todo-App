import React, { useState } from "react";
import { Checkbox } from "flowbite-react";
import { Trash, Pencil } from "lucide-react";
import { customThemeCheckbox } from "../assets/customTheme";
import useActionTodo from "../hooks/useActionTodo";

function Todo({ data, index, handleCompleted, handleDelete, handleUpdate }) {
  const { showSwalDelete, showSwalUpdate } = useActionTodo(
    data,
    handleDelete,
    handleUpdate
  );
  const [updateTodo, setupdateTodo] = useState(data.todo);

  return (
    <li className="flex justify-between w-full">
      <div className="flex items-start gap-2.5 w-3/4 md:w-[91%] xl:w-[92%] 2xl:w-[94%]">
        <Checkbox
          onClick={() => handleCompleted(data.id, data.completed)}
          theme={customThemeCheckbox}
          value={data.completed}
          className="checked:bg-amber-300"
        />
        <p className="w-5/6 lg:w-8/9 text-base md:text-xl xl:text-3xl font-medium wrap-break-word">
          {data.todo}
        </p>
      </div>
      <div className="space-x-2.5">
        <button
          onClick={() => showSwalDelete(data.completed)}
          className="cursor-pointer text-red-400 active:scale-95"
        >
          <Trash className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" />
        </button>
        <button
          onClick={() => showSwalUpdate(updateTodo, setupdateTodo)}
          className="cursor-pointer text-blue-400 active:scale-95"
        >
          <Pencil className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
