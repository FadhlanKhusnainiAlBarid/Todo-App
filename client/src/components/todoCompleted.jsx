import React, { useState } from "react";
import { Checkbox } from "flowbite-react";
import { Trash, Pencil } from "lucide-react";
import ModalDelete from "./modalDelete";
import ModalUpdate from "./modalUpdate";
import { customThemeCheckbox } from "../assets/customTheme";

function TodoCompleted({
  data,
  index,
  handleCompleted,
  handleDelete,
  handleUpdate,
  isError,
}) {
  const [modalDelete, setmodalDelete] = useState(false);
  const [modalUpdate, setmodalUpdate] = useState(false);
  return (
    <li className="flex justify-between w-full">
      <div className="flex items-start gap-2.5 w-3/4 md:w-[91%] xl:w-[92%] 2xl:w-[94%]">
        <Checkbox
          theme={customThemeCheckbox}
          onClick={() => handleCompleted(data.id, data.completed)}
          defaultChecked
        />
        <p className="w-5/6 lg:w-8/9 text-base md:text-xl xl:text-3xl font-medium wrap-break-word">
          {data.todo}
        </p>
      </div>
      <div className="space-x-2.5">
        <button
          onClick={() => setmodalDelete(true)}
          className="cursor-pointer text-red-400 active:scale-95"
        >
          <Trash className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" />
        </button>
        <button
          onClick={() => setmodalUpdate(true)}
          className="cursor-pointer text-blue-400 active:scale-95"
        >
          <Pencil className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" />
        </button>
      </div>
      <ModalDelete
        data={data}
        modalDelete={modalDelete}
        setmodalDelete={setmodalDelete}
        handleDelete={handleDelete}
      />
      <ModalUpdate
        data={data}
        modalUpdate={modalUpdate}
        setmodalUpdate={setmodalUpdate}
        handleUpdate={handleUpdate}
        isError={isError}
      />
    </li>
  );
}

export default TodoCompleted;
