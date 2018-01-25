/// <binding BeforeBuild='before-build' Clean='clean' />
const gulp = require('gulp');
const rollup = require('rollup-stream');
const rollupConfig = require('./rollup.config');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const del = require("del");

const paths = {
	distributionJS: './dist',
	sourceJS: './src',
	website: './../Website'
};
const bundleName = 'bundle.js';

gulp.task('rollup', () => {                      // define task named 'rollup'
	return rollup(rollupConfig)                  // fire up rollup with existing config file
		.pipe(source(rollupConfig.input))        // pipe in entry-point JS file
		.pipe(buffer())                          // buffer the output because many gulp plugins don't support streams
		.pipe(sourcemaps.init({loadMaps: true})) // fire up sourcemaps
		.pipe(rename(bundleName))                // rename output to 'bundle.js'
		.pipe(sourcemaps.write('.'))             // write the sourcemap for 'bundle.js' to 'bundle.js.map'
		.pipe(gulp.dest(paths.distributionJS));  // spit 'bundle.js' and sourcemap out in the 'dist' folder
});

gulp.task('publish-js', ['rollup'], () => {                   // define task named 'publish-js' that depends on task 'rollup'
	return new Promise(resolve => {                           // returning a promise allows this task to run asynchronously
		let bundle = paths.distributionJS + '/' + bundleName; //
		gulp.src([ bundle, bundle + '.map' ])                 // grab the bundle and sourcemap files
			.pipe(gulp.dest(paths.website + '/js'))           // and copy them into the Sitecore instance
			.on("finish", resolve);
	});
});

gulp.task('watch-js', ['publish-js'], () => {                 // define task named 'watch-js' that depends on task 'publish-js'
	gulp.watch(paths.sourceJS + '/**/*.js', ['publish-js']);  // watch all JS files in 'src' folder for changes; run 'publish-js' if changes are detected
});

gulp.task('before-build', ['publish-js']);

gulp.task('clean', () => {
	del([ paths.distributionJS + '/*.js', paths.distributionJS + '/*.map' ])
});