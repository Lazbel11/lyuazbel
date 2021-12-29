export function formatProjectDate(date: string) {
  // todo: replace date by 'present' if given date is in the future
  return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short' });
}

export function formatProjectTimeframe(start: string, end: string) {
  return formatProjectDate(start) + ' - ' + formatProjectDate(end);
}

// TODO: add html obfuscation
type EmbedHtmlAnchorOpts = { targetBlank: boolean; displayStr?: string };
export function embedHtmlAnchor(href: string, opts: EmbedHtmlAnchorOpts = { targetBlank: true }) {
  const targetStr = "target='_blank' rel='noreferrer noopener'";
  return `<a href='${href}' ${opts?.targetBlank && targetStr}>${opts.displayStr ? opts.displayStr : href}</a>`;
}
