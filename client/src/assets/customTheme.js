import { createTheme } from "flowbite-react";

export const customThemeCheckbox = createTheme({
    base: "h-5 w-5 appearance-none rounded border border-2 border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-400 dark:bg-white dark:checked:border-transparent dark:checked:bg-current",
    color: {
        default:
            "text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
    },
    indeterminate:
        "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current",
});

export const customThemeModal = createTheme({
    content: {
        base: "relative h-full w-full p-4 md:h-auto",
        inner:
            "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-white",
    },
    header: {
        base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
        popup: "border-b-0 p-2",
        title: "text-xl font-medium text-gray-900 dark:text-red-600",
        close: {
            base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
            icon: "h-5 w-5",
        },
    },
    footer: {
        base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
        popup: "border-t",
    },
});

export const customThemeInput = createTheme({
    input: {
        default: {
            standard: {
                sm: `peer block w-full appearance-none border-0 border-b-2 focus:border-b-2 border-gray-400 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-transparent dark:text-black dark:focus:border-gray-500`,
                md: `peer block w-full appearance-none border-0 border-b-2 focus:border-b-2 border-gray-400 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-400 focus:border-gray-500 dark:text-black dark:focus:border-gray-500`,
            },
        },
        error: {
            standard: {
                sm: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-black dark:focus:border-red-500",
                md: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-black dark:focus:border-red-500",
            },
        },
    },
    label: {
        default: {
            standard: {
                sm: "absolute top-2.5 z-30 origin-[0] -translate-y-6 scale-75 text-xs font-medium text-gray-400 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500 dark:text-gray-400 peer-focus:dark:text-gray-500",
                md: "absolute top-2.5 z-30 origin-[0] -translate-y-6 scale-75 text-sm font-medium text-gray-400 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500 dark:text-gray-400 peer-focus:dark:text-gray-500",
            },
        },
        error: {
            standard: {
                sm: "absolute top-3 z-30 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
                md: "absolute top-3 z-30 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
            },
        },
    },
});