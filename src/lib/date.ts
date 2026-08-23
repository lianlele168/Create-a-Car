export function getMonthYear(date = new Date()) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function getTodayISO(date = new Date()) {
  return date.toISOString().slice(0, 10);
}
