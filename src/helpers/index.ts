export function formatProjectDate(date: string) {
  // todo: replace date by 'present' if given date is in the future
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short' });
}

export function formatProjectTimeframe(start: string, end: string) {
  return formatProjectDate(start) + ' - ' + formatProjectDate(end);
}
