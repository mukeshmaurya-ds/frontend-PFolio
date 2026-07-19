export function formatDate(
  date: string | Date,
  locale = "en-US"
) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}