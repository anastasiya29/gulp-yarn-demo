const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const inject = require('rollup-plugin-inject');

module.exports = {
    input: './src/main.js',
	format: 'iife',
    sourcemap: true,
    plugins: [
        resolve({
            customResolveOptions: {
                module: true,
                moduleDirectory: 'node_modules',
                browser: true,
                jsnext: true
            }
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        inject({
            include: '**/*.js',
            exclude: 'node_modules/**',
            $: 'jquery',
            Cookies: 'js-cookie',
            moment: 'moment'
        })
    ]
};