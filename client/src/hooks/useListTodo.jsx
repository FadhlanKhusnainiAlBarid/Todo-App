import { useEffect, useState } from "react";
import axios from "axios";

function useListTodo() {
  const [listTodo, setlistTodo] = useState([]);

  const fetchListTodo = async () => {
    const { data } = await axios.get("http://localhost:3000/listTodo");
    setlistTodo(data);
  };

  useEffect(() => {
    fetchListTodo();
  }, []);

  const handleSortable = async (fromId, toId) => {
    // const fromTodo = listTodo.includes((d) => d.id === fromId);
    const toTodo = listTodo.find((d) => d.id == toId);

    const responseFromTodo = await axios.patch(
      `http://localhost:3000/listTodo/${Number(fromId)}`,
      {
        todo: toTodo?.todo,
      }
    );

    console.log(toTodo, fromId, toId);

    // const responseToTodo = await axios.patch(
    //   `http://localhost:3000/list-todo/${toId}`,
    //   {
    //     todo: fromTodo,
    //   }
    // );

    if (responseFromTodo) {
      console.log(responseFromTodo);
    }
  };

  return { listTodo, handleSortable };
}

export default useListTodo;
