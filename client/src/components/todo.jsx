import React, { useEffect, useRef, useState } from "react";
import { Checkbox } from "flowbite-react";
import { Trash, Pencil, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { customThemeCheckbox } from "../assets/customTheme";
import useActionTodo from "../hooks/useActionTodo";
import gsap from "gsap";

function gabungkanRef(...refs) {
  return (element) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(element);
      } else if (ref != null) {
        ref.current = element;
      }
    });
  };
}

function Todo({
  listTodo,
  data,
  id,
  index,
  handleCompleted,
  handleDelete,
  handleUpdate,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const todoRefs = useRef({});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { showSwalDelete, showSwalUpdate } = useActionTodo(
    data,
    handleDelete,
    handleUpdate
  );
  const [updateTodo, setupdateTodo] = useState(data.todo);

  const mkdc = todoRefs.current.length;

  useEffect(() => {
    console.log(mkdc);
    if (listTodo.length === 0) return;

    const latestId = listTodo[listTodo.length - 1].id;
    const element = todoRefs.current[latestId];

    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, x: 90 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "circ.out",
        }
      );
    }
  }, [todoRefs.current]);

  return (
    <li
      ref={gabungkanRef(setNodeRef, (el) => (todoRefs.current[data.id] = el))}
      style={style}
      className="flex justify-between w-full"
    >
      <div className="flex items-start gap-2.5 w-3/4 md:w-[91%] xl:w-[92%] 2xl:w-[94%]">
        <div
          {...listeners}
          {...attributes}
          className="cursor-grab p-2 rounded hover:bg-gray-200"
        >
          <GripVertical className="" />
        </div>
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
