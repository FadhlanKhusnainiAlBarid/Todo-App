import React, { useState } from "react";
import {
  Checkbox,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  createTheme,
} from "flowbite-react";
import { Trash } from "lucide-react";

function TodoCompleted({ data }) {
  const [modalDelete, setmodalDelete] = useState(false);
  const customThemeCheckbox = createTheme({
    base: "h-5 w-5 appearance-none rounded border border-2 border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-400 dark:bg-white dark:checked:border-transparent dark:checked:bg-current",
    color: {
      default:
        "text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
    },
    indeterminate:
      "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current",
  });
  const customThemeModal = createTheme({
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-white",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium text-gray-900 dark:text-red-600",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  });
  return (
    <li className="flex justify-between">
      <div className="inline-flex items-center gap-2.5">
        <Checkbox theme={customThemeCheckbox} defaultChecked />
        <p className="text-sm">{data.todo}</p>
      </div>
      <div>
        <button
          onClick={() => setmodalDelete(true)}
          className="cursor-pointer text-red-400 active:scale-95"
        >
          <Trash />
        </button>
      </div>
      <Modal
        dismissible={false}
        theme={customThemeModal}
        show={modalDelete}
        onClose={() => setmodalDelete(false)}
      >
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you sure delete this todo
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => handleDelete(data.id)}>I accept</Button>
          <Button color="gray" onClick={() => setmodalDelete(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </li>
  );
}

export default TodoCompleted;
