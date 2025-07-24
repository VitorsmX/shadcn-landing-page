import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type cutLongTextProps = {
  (text: string, limit: number, messageAfterEnd: string): string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cutLongText: cutLongTextProps = (text, limit, messageAfterEnd) => {
  const condition = text.length >= limit
  const textCutted = text.substring(0,limit)
  const finalText = condition ? textCutted + messageAfterEnd : text
  const sanitizedText = finalText.toString()
  return sanitizedText
}
