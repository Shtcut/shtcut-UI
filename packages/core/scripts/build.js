const fs = require('fs');
const postcss = require('postcss');
const tailwind = require('tailwindcss');
const ClassCss = require('clean-css');

function buildDistFile(filename) {
  return postcss([
    require('postcss-import'),
    tailwind({
      darkMode: 'class',
      corePlugins: {
        container: false,
      },
      plugins: [require('../src/index.js')],
    }),
    require('autoprefixer'),
  ])
    .process('@tailwind components;', {
      from: null,
      to: `./dist/${filename}.css`,
      map: false,
    })
    .then((result) => {
      fs.writeFileSync(`./dist/${filename}.css`, result.css);
      return result;
    })
    .then((result) => {
      const minified = new ClassCss().minify(result.css);
      fs.writeFileSync(`./dist/${filename}.min.css`, minified.styles);
    })
    .catch((err) => {
      console.log('compile-err', err);
    });
  // return Promise.resolve();
}

console.info('Wrapping up CSS....');

Promise.all([buildDistFile('shtcut-ui')]).then(() => {
  console.log('Finished wrapping up CSS');
});
