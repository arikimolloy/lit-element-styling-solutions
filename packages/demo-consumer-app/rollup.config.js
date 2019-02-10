import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'demo-consumer-app.js',
  output: {
    file: 'index.js',
    format: 'iife',
    name: 'main',
    sourcemap: true
  },
  plugins: [resolve()]
};
