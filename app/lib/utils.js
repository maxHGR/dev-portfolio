import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/*
clsx    =>  is a utility for conditionally joining class names together. 
twMerge =>  resolves conflicting classes from tailwindcss 
cn      =>  function takes in an array of classes and returns a string of classes

The result from clsx is then passed to twMerge, which resolves any conflicting Tailwind CSS classes.
Streamline the process of dynamically combining classes
*/