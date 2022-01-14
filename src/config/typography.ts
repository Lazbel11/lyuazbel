import Typography from 'typography';

// @ts-ignore
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 1.5,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Helvetica', 'Georgia', 'serif'],
  headerWeight: 300,
  bodyWeight: 400,
  boldWeight: 600,
  blockMarginBottom: '1rem',
});

const css = typography.toString();
console.log(css);
// navigator.clipboard.writeText(css).then(
//   function () {
//     console.log('Async: Copying to clipboard was successful!');
//   },
//   function (err) {
//     console.error('Async: Could not copy text: ', err);
//   }
// );

export const { scale, rhythm, options } = typography;
export default typography;
