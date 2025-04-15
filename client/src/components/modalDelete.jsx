import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { customThemeModal } from "../assets/customTheme";

function ModalDelete({ data, modalDelete, setmodalDelete, handleDelete }) {
  return (
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
  );
}

export default ModalDelete;
