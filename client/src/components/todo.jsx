import React, { useEffect } from "react";
import { Checkbox, createTheme } from "flowbite-react";

function Todo({ data, index }) {
  const customThemeCheckbox = createTheme({
    base: "h-5 w-5 appearance-none rounded border border-2 border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-400 dark:bg-white dark:checked:border-transparent dark:checked:bg-current",
    color: {
      default:
        "text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
      // dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
    },
    indeterminate:
      "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current",
  });
  return (
    <li className="flex items-center gap-2.5">
      <Checkbox theme={customThemeCheckbox} />
      <p className="text-sm">{data.todo}</p>
    </li>
  );
}

export default Todo;
