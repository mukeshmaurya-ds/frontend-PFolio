export function truncate(
  text: string,
  length = 100
) {
  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}