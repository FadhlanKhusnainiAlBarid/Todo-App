import React from "react";
import Navbar from "./components/navbar";
import ListTodoSection from "./components/listTodoSection";
import useListTodo from "./hooks/useListTodo";

function App() {
  const { listTodo } = useListTodo();

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <ListTodoSection listTodo={listTodo} />
      </div>
    </>
  );
}

export default App;
