import { ClassValue, clsx } from "clsx";
// Utility for tailwind class merging
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
