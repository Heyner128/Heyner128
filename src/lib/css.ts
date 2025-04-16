
import { clsx, type ClassValue } from "clsx"

export function concatenateClassNames(...names: ClassValue[]) {
  return clsx(names)
}


