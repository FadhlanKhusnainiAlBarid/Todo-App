import React from "react";
import { LayoutList } from "lucide-react";

function Navbar() {
  return (
    <nav className="px-3 py-4 md:py-6">
      <span className="inline-flex items-center gap-2.5">
        <LayoutList className="w-8 h-8 md:w-11 md:h-11" />
        <h1 className="text-3xl md:text-4xl font-oswald">Todo List</h1>
      </span>
    </nav>
  );
}

export default Navbar;
