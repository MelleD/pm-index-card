import typescript from "@rollup/plugin-typescript";
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import ignore from "./rollup-plugins/ignore.js";

import { ignoreTextfieldFiles } from './elements/ignore/textfield.js';
import { ignoreSelectFiles } from './elements/ignore/select.js';
import { ignoreSwitchFiles } from './elements/ignore/switch.js';


const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript({
    declaration: false,
  }),
  json(),
  babel({
    babelHelpers: "bundled",
  }),
  ignore({
    files: [...ignoreTextfieldFiles, ...ignoreSelectFiles, ...ignoreSwitchFiles].map((file) => require.resolve(file)),
  }),
  ...(dev ? [serve(serveopts)] : [terser()]),
];

export default [
  {
      input: "src/pm-index-card.ts",
      output: {
          dir: "dist",
          format: "es",
          inlineDynamicImports: true,
      },
      plugins,
      moduleContext: (id) => {
          const thisAsWindowForModules = [
              "node_modules/@formatjs/intl-utils/lib/src/diff.js",
              "node_modules/@formatjs/intl-utils/lib/src/resolve-locale.js",
          ];
          if (thisAsWindowForModules.some((id_) => id.trimRight().endsWith(id_))) {
              return "window";
          }
      },
  },
];
