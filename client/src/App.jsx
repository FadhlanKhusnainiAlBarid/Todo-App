import React from "react";
import Navbar from "./components/navbar";
import ListTodoSection from "./components/listTodoSection";
import useListTodo from "./hooks/useListTodo";

function App() {
  const { listTodo, handlePostTodo, responsePostTodo } = useListTodo();

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <ListTodoSection
          listTodo={listTodo}
          handlePostTodo={handlePostTodo}
          responsePostTodo={responsePostTodo}
        />
      </div>
    </>
  );
}

export default App;
