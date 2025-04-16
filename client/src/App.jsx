import React from "react";
import Navbar from "./components/navbar";
import ListTodoSection from "./components/listTodoSection";

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
