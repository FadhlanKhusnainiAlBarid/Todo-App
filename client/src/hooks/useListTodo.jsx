import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

function useListTodo() {
  const [listTodo, setlistTodo] = useState([]);

  const [responsePostTodo, setresponsePostTodo] = useState(false);
  const [isError, setisError] = useState({
    postError: false,
    massageErrorPost: "",
    // rowsUpdate: ["s"],
    updateError: false,
    massageErrorUpdate: "",
  });

  const fetchListTodo = async () => {
    const { data } = await axiosInstance.get("/todos");
    setlistTodo(data);
  };

  useEffect(() => {
    fetchListTodo();
  }, []);

  const handlePostTodo = async (input) => {
    setresponsePostTodo(false);
    setisError(
      (prev) =>
        (prev = {
          ...prev,
          postError: false,
          massageErrorPost: "",
        })
    );

    if (input.length < 3) {
      setisError(
        (prev) =>
          (prev = {
            ...prev,
            postError: true,
            massageErrorPost: "Todo has a minimum of 3 characters",
          })
      );
      return;
    }

    await axiosInstance.post("/todos", {
      todo: input,
      completed: false,
    });

    setresponsePostTodo(true);
    fetchListTodo();
  };

  const handleDelete = async (todoId) => {
    try {
      await axiosInstance.delete(`/todos/${todoId}`);
      fetchListTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id, updateTodo) => {
    setisError(
      (prev) =>
        (prev = {
          ...prev,
          // rowsUpdate: [],
          updateError: false,
          massageErrorUpdate: "",
        })
    );

    if (updateTodo.length < 3) {
      setisError(
        (prev) =>
          (prev = {
            ...prev,
            // rowsUpdate: [...prev?.rowsUpdate, id],
            updateError: true,
            massageErrorUpdate: "Todo has a minimum of 3 characters",
          })
      );
      return;
    }

    try {
      await axiosInstance.patch(`/todos/${id}`, {
        todo: updateTodo,
      });
      fetchListTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleted = async (id, valueComplete) => {
    // console.log(id, !valueComplete);
    await axiosInstance.patch(`/todos/${id}`, {
      completed: !valueComplete,
    });
    fetchListTodo();
  };

  return {
    listTodo,
    handlePostTodo,
    responsePostTodo,
    isError,
    handleDelete,
    handleUpdate,
    handleCompleted,
  };
}

export default useListTodo;
