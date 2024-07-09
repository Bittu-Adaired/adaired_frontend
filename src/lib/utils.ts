import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const ClientRemoveTags = (html: any) => {
  // Regular expression to match HTML tags
  const tagRegex = /<[^>]*>|&nbsp;/g;

  // Remove HTML tags using regex
  const textWithoutTags = html.replace(tagRegex, "");

  return textWithoutTags;
};

export const ServerRemoveTags = (html: any) => {
  // Regular expression to match HTML tags
  const tagRegex = /<[^>]*>|&nbsp;/g;

  // Remove HTML tags using regex
  const textWithoutTags = html.replace(tagRegex, "");

  return textWithoutTags;
};

export const DateComponent = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// utils/shadeColor.ts
// utils/hexToHexWithAlpha.ts
export function shadeColor(hex: string, transparency: number): string {
  const alpha = Math.round((100 - transparency) * 2.55).toString(16).padStart(2, '0').toUpperCase();
  return `${hex}${alpha}`;
}



// utils/hexToHexWithOpacity.ts
export function hexToHexWithOpacity(hex: string, opacity: number): string {
  // Ensure opacity is within range 0 to 1
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();
  // Remove the '#' from the hex code
  const trimmedHex = hex.startsWith('#') ? hex.slice(1) : hex;
  return `#${trimmedHex}${alpha}`;
}
