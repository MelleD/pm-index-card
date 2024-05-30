import resolve from 'rollup-plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import ignore from "./rollup-plugins/ignore.js";

const IGNORED_FILES = [
    "@material/mwc-notched-outline/mwc-notched-outline.js",
    "@material/mwc-ripple/mwc-ripple.js",
    "@material/mwc-list/mwc-list.js",
    "@material/mwc-list/mwc-list-item.js",
    "@material/mwc-menu/mwc-menu.js",
    "@material/mwc-menu/mwc-menu-surface.js",
    "@material/mwc-icon/mwc-icon.js",
];


export default {
  input: ['src/pm-index-card.ts'],
  output: {
    dir: './dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript(),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
    ignore({
      files: IGNORED_FILES.map((file) => require.resolve(file)),
    }),
  ],
};
