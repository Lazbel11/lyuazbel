import { Publication } from '../pages/publications';

export function capitalise(str) {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function simpleFormatString(title: string, format: 'id' | 'headline' = 'id'): string {
  title = title.trim();
  if (typeof title !== 'string') return title;
  const dash = new RegExp('-', 'g');
  const underscore = new RegExp('_', 'g');
  const space = new RegExp(' ', 'g');
  const quotes = new RegExp('"', 'g');

  if (format.toLowerCase() === 'id') {
    if (space.test(title)) {
      title = title.replace(space, '-');
    }
    if (underscore.test(title)) {
      title = title.replace(underscore, '-');
    }
    if (quotes.test(title)) {
      title = title.replace(quotes, '');
    }
    return title.toLowerCase();
  } else if (format.toLowerCase() === 'headline') {
    if (dash.test(title)) {
      title = capitalise(title.replace(dash, '_'));
      return title;
    } else {
      console.log('Nothing to format!');
    }
  } else {
    console.error("Please provide a format argument, either 'id' or 'headline'");
  }
  return title;
}

export function formatProjectDate(date: string) {
  const projectDate = new Date(date);
  const displayDate =
    projectDate.getTime() > new Date().getTime()
      ? 'present'
      : projectDate.toLocaleDateString('en-GB', { year: 'numeric' });
  return displayDate;
}

export function formatProjectTimeframe(start: string, end: string) {
  return formatProjectDate(start) + ' - ' + formatProjectDate(end);
}

export function reducePublicationsByCategory(publications: Publication[]) {
  return publications.reduce((acc: Record<string, Publication[]>, pub) => {
    const category = simpleFormatString(pub.category);
    if (category in acc) {
      acc[category].push(pub);
    } else {
      acc[category] = [pub];
    }
    return acc;
  }, {});
}

// todo: add html obfuscation
type EmbedHtmlAnchorOpts = { targetBlank: boolean; displayStr?: string };
export function embedHtmlAnchor(href: string, opts: EmbedHtmlAnchorOpts = { targetBlank: true }) {
  const targetStr = "target='_blank' rel='noreferrer noopener'";
  return `<a href='${href}' ${opts?.targetBlank && targetStr}>${opts.displayStr ? opts.displayStr : href}</a>`;
}
