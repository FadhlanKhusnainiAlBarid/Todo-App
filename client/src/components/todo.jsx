import React, { useEffect } from "react";
import { useSortable } from "@dnd-kit/react/sortable";

function Todo({ data, index }) {
  const { ref, isDragging, isDropTarget } = useSortable({
    id: data.id,
    index,
  });

  return (
    <li
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        background: isDropTarget ? "white" : "lightblue",
      }}
      className="cursor-grab"
    >
      {data.todo}
    </li>
  );
}

export default Todo;
