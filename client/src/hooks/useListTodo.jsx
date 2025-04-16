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
    rowsUpdate: ["s"],
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
    console.log(updateTodo, "this input string");

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

  // const handleChangeSortable = async (source, target, from, to) => {
  //   // let newArray;

  //   const responseSource = await axiosInstance.get(`/todos/${source.id}`);
  //   const responseTarget = await axiosInstance.get(`/todos/${target.id}`);
  //   console.log(responseSource, responseTarget);

  //   // newArray = data.map((data) =>
  //   //   data.id === source.id
  //   //     ? { ...data, todo: to.todo }
  //   //     : data || data.id === target.id
  //   //     ? { ...data, todo: from.todo }
  //   //     : data
  //   // );
  //   console.log(source, target, from, to);

  //   // setdata(newArray);
  //   await axiosInstance.patch(`/todos/${target.id}`, {
  //     todo: from.todo,
  //   });
  //   await axiosInstance.patch(`/todos/${source.id}`, {
  //     todo: to.todo,
  //   });
  //   fetchListTodo();
  // };

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
