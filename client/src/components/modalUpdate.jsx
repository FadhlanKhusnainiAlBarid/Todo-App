import React, { useState } from "react";
import { CircleAlert } from "lucide-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FloatingLabel,
} from "flowbite-react";
import { customThemeModal, customThemeInput } from "../assets/customTheme";

function ModalUpdate({
  data,
  modalUpdate,
  setmodalUpdate,
  handleUpdate,
  isError,
}) {
  const [updateTodo, setupdateTodo] = useState(data.todo);

  const handleFormUpdate = (e) => {
    e.preventDefault();
    handleUpdate(data.id, updateTodo);
    setTimeout(() => {
      if (!isError.updateError) {
        setmodalUpdate(false);
      }
    }, 500);
  };
  return (
    <Modal
      dismissible={false}
      theme={customThemeModal}
      show={modalUpdate}
      onClose={() => setmodalUpdate(false)}
    >
      <ModalHeader>Terms of Service</ModalHeader>
      <ModalBody>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Are you sure delete this todo
          </p>
          <form onSubmit={handleFormUpdate}>
            <FloatingLabel
              theme={customThemeInput}
              variant="standard"
              label="Update todo"
              color={isError.updateError ? `error` : `default`}
              value={updateTodo}
              onChange={(e) => setupdateTodo(e.target.value)}
            />
            {isError.updateError && (
              <div className="flex items-center mt-1 gap-1.5 text-red-600">
                <CircleAlert />
                <span>{isError.massageErrorUpdate}</span>
              </div>
            )}
          </form>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleFormUpdate}>I accept</Button>
        <Button color="gray" onClick={() => setmodalUpdate(false)}>
          Decline
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalUpdate;
