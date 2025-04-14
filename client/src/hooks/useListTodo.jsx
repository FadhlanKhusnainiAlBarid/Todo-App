import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

function useListTodo() {
  const [listTodo, setlistTodo] = useState([]);

  const [responsePostTodo, setresponsePostTodo] = useState(false);
  const [isError, setisError] = useState(false);
  const [massageError, setmassageError] = useState("");

  const fetchListTodo = async () => {
    const { data } = await axiosInstance.get("/todos");
    setlistTodo(data);
  };

  useEffect(() => {
    fetchListTodo();
  }, []);

  const handlePostTodo = async (input) => {
    setresponsePostTodo(false);
    setisError(false);
    setmassageError("");

    if (input.length < 3) {
      setisError(true);
      setmassageError("Todo has a minimum of 3 characters");
      return;
    }

    await axiosInstance.post("/todos", {
      todo: input,
    });

    setresponsePostTodo(true);
    fetchListTodo();
  };

  const handleDelete = async (todoId) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${todoId}`);
      fetchListTodo();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    listTodo,
    handlePostTodo,
    responsePostTodo,
    isError,
    massageError,
    handleDelete,
  };
}

export default useListTodo;
