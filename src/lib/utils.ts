import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { eachDayOfInterval, type Day } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDaysInYear(year: number = new Date().getFullYear()): Day[] {
  const startDate = new Date(year, 0, 1)
  const endDate = new Date(year, 11, 31)
  return eachDayOfInterval({ start: startDate, end: endDate }) as Day[]
}
