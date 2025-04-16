import React, { useEffect, useState } from "react";
import { Checkbox } from "flowbite-react";
import { Trash, Pencil } from "lucide-react";
import { customThemeCheckbox } from "../assets/customTheme";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { useSortable } from "@dnd-kit/react/sortable";

function Todo({
  data,
  index,
  handleCompleted,
  handleDelete,
  handleUpdate,
  isError,
}) {
  // const { ref } = useSortable({ id: data.id, index });
  const [updateTodo, setupdateTodo] = useState(data.todo);

  const showSwalDelete = () => {
    withReactContent(Swal)
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your todo has been deleted.",
            icon: "success",
          });
          handleDelete(data.id);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "Cancelled",
            text: "Completed you todo before deleted :)",
            icon: "error",
          });
        }
      });
  };

  const showSwalUpdate = () => {
    const swalStyling = withReactContent(Swal).mixin({
      customClass: {
        input: "",
        inputLabel: "text-2xl",
      },
      inputValue: `${updateTodo}`,
    });

    swalStyling
      .fire({
        title: "Edit todo",
        willOpen: () => {
          const input = Swal.getInput();
          input.oninput = (e) => setupdateTodo(e.target.value);
        },
        inputLabel: "Todo",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Yes, Edit todo!",
        allowOutsideClick: () => !Swal.isLoading(),
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Edit!",
            text: "Your todo has been Updated.",
            icon: "success",
          });
        }
      });
  };

  useEffect(() => {
    console.log(updateTodo);
  }, [updateTodo]);

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
          onClick={showSwalDelete}
          className="cursor-pointer text-red-400 active:scale-95"
        >
          <Trash className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" />
        </button>
        <button
          onClick={showSwalUpdate}
          className="cursor-pointer text-blue-400 active:scale-95"
        >
          <Pencil className="w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
