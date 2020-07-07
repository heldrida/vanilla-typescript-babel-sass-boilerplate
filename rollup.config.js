import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import html from '@rollup/plugin-html'

const extensions = ['.ts']

const config = {
  input: 'src/index.ts',
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    resolve({
      extensions
    }),
    html({
      title: "Typescript+Babel+Stylus+Rollup Boilerplate",
      attributes: {
        html: {
          lang: 'en'
        },
        link: {
          rel: 'stylesheet',
          href: 'build/bundle.min.js'
        },
        script: null
      },
    }),
    babel({
      extensions,
      babelHelpers: 'bundled'
    })
  ]
}
 
export default config