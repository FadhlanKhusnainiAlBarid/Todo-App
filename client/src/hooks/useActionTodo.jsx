import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function useActionTodo(data, handleDelete, handleUpdate) {
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

  const showSwalUpdate = async (updateTodo, setupdateTodo) => {
    const { isConfirmed, dismiss, value } = await Swal.fire({
      title: "Edit todo",
      inputLabel: "Todo",
      input: "text",
      inputValue: `${updateTodo}`,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
    });

    if (isConfirmed) {
      setupdateTodo(value);
      Swal.fire({
        title: "Edit!",
        text: "Your todo has been Updated.",
        icon: "success",
      });
      handleUpdate(data.id, value);
    } else if (dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "Cancelled",
        text: "Completed you todo before deleted :)",
        icon: "error",
      });
    }
  };

  return { showSwalDelete, showSwalUpdate };
}

export default useActionTodo;
