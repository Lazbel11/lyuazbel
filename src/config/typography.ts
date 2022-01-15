//  WIP: https://github.com/gatsbyjs/gatsby/issues/21079

import Typography from 'typography';

// @ts-ignore
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 1.5,
  headerFontFamily: ['$font-family-heading'],
  bodyFontFamily: ['$font-family-body'],
  // headerWeight: '$font-weight-heading',
  // bodyWeight: '$font-weight-body',
  // boldWeight: '$font-weight-bold',
  blockMarginBottom: '1rem',
  includeNormalize: false,
  // overrideStyles: (e, options, styles) => ({
  //   a: {
  //     fontFamily: '$font-family-heading',
  //     fontWeight: 400,
  //   },
  // }),
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

// search & replace all regexes /'\$font-family-(.*)'/ to $font-family-$1

export const { scale, rhythm, options } = typography;
export default typography;
