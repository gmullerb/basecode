//  Copyright (c) 2017 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const gulp = require("gulp");
const filter = require("gulp-filter");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const src = process.env.npm_config_front_src;
const dest = process.env.npm_config_front_dest;
const env = process.env.npm_config_front_env;

console.info(`Source folder: ${src}`);
console.info(`Destination folder: ${dest}`);
console.info(`Environment: ${env}`);

gulp.task("default", () => {
  const cfgFilter = filter(`**/environment-${env}.js`, {restore: true});
  return gulp.src([`${src}/*.*`,
    `${src}/modules/**/*.*`,
    `${src}/config/*(environment|environment-${env}).js`])
    .pipe(cfgFilter)
    .pipe(rename({
      basename: "environment-more",
    }))
    .pipe(cfgFilter.restore)
    .pipe(gulp.dest(dest))
    .pipe(filter("**/*.js"))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
});
