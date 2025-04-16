import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function useActionTodo(data, handleDelete, handleUpdate) {
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
            icon: "warning",
          });
        }
      });
  };

  const showSwalUpdate = () => {
    const swalStyling = Swal.mixin({
      customClass: {
        input: "",
        inputLabel: "text-2xl",
      },
      inputValue: `${updateTodo}`,
    });

    swalStyling
      .fire({
        title: "Edit todo",
        didOpen: () => {
          const input = Swal.getInput();
          input.oninput = (e) => {
            setupdateTodo(e.target.value);
          };
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
            title: "Edit todo!",
            text: "Your todo has been Updated.",
            icon: "success",
          });
          handleUpdate(data.id, updateTodo);
        }
      });
  };

  return { showSwalDelete, showSwalUpdate };
}

export default useActionTodo;
