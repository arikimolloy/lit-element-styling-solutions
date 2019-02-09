import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'demo/bundle.js',
    format: 'iife',
    name: 'main',
    sourcemap: true
  },
  plugins: [resolve()]
};
