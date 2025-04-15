import React from "react";
import Navbar from "./components/navbar";
import ListTodoSection from "./components/listTodoSection";
import useListTodo from "./hooks/useListTodo";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <ListTodoSection />
      </div>
    </>
  );
}

export default App;
