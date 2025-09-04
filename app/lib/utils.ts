import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// This file called 'cn' helps you combine CSS class names in a React + Tailwind CSS project.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}