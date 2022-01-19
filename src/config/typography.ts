//  WIP: https://github.com/gatsbyjs/gatsby/issues/21079

import Typography from 'typography';

const headerFontFamily = ['Outfit', 'Avenir Next', 'Roboto', 'Helvetica Neue', 'sans-serif'];
const baseFontFamily = ['Rubik', 'Lucida Grande', 'Geneva', 'Roboto', 'Arial', 'sans-serif'];
const headerFontWeight = 400;
const boldFontWeight = 500;
const baseFontSize = '16px';
const baseLineHeight = 1.2;
const rythmUnit = 'rem';
const baseFontWeight = 400;
const baseFontColor = '#303033';

const typography = new Typography({
  baseFontSize,
  baseLineHeight,
  scaleRatio: 1.5,
  headerFontFamily,
  bodyFontFamily: baseFontFamily,
  headerWeight: headerFontWeight,
  bodyWeight: baseFontWeight,
  boldWeight: boldFontWeight,
  blockMarginBottom: 1,
  bodyColor: baseFontColor,
  includeNormalize: false,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      'h1,h2,h3,h4,h5,h6': {
        lineHeight: baseLineHeight,
      },
    };
  },
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
