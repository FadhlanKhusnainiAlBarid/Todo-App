import React from "react";
import Navbar from "./components/navbar";
import ListTodoSection from "./components/listTodoSection";
import useListTodo from "./hooks/useListTodo";

function App() {
  const {
    listTodo,
    handlePostTodo,
    responsePostTodo,
    isError,
    massageError,
    handleDelete,
  } = useListTodo();

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <ListTodoSection
          listTodo={listTodo}
          handlePostTodo={handlePostTodo}
          responsePostTodo={responsePostTodo}
          isError={isError}
          massageError={massageError}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
