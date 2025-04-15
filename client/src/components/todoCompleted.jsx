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
    <li className="flex justify-between">
      <div className="inline-flex items-center gap-2.5">
        <Checkbox
          theme={customThemeCheckbox}
          onClick={() => handleCompleted(data.id, data.completed)}
          defaultChecked
        />
        <p className="text-sm">{data.todo}</p>
      </div>
      <div className="space-x-2.5">
        <button
          onClick={() => setmodalDelete(true)}
          className="cursor-pointer text-red-400 active:scale-95"
        >
          <Trash />
        </button>
        <button
          onClick={() => setmodalUpdate(true)}
          className="cursor-pointer text-blue-400 active:scale-95"
        >
          <Pencil />
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
