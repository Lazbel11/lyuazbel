import Typography from 'typography';

// @ts-ignore
const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700'],
    },
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerWeight: 300,
  bodyWeight: 400,
  boldWeight: 600,
  blockMarginBottom: '1rem',
});

export const { scale, rhythm, options } = typography;
export default typography;
