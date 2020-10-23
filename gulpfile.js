// packages
const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

// SASS config
sass.compiler = require("node-sass");

// Variables
var paths = {
  styles: {
    src: "./assets/public/sass/**/*.scss",
    dest: "./assets/public/css"
  },
  html: {
    src: "./*.html"
  },
  js: {
    src: "./assets/src/js/**/*.js",
    dest: "./assets/public/js"
  },
  img: {
    src: "./assets/src/img/**/*.*",
    dest: "./assets/public/img"
  }
};

// SASS Compile Function
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Copy JS Files to destination folder
function js() {
  return gulp.src(paths.js.src).pipe(gulp.dest(paths.js.dest));
}

// Copy Image files to destination folder and stream to browser
function img() {
  return gulp
    .src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest))
    .pipe(browserSync.stream());
}

// Watch function
function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  style();
  js();
  img();
  gulp.watch(paths.styles.src, gulp.series(style));
  gulp.watch(paths.js.src, gulp.series(js));
  gulp.watch(paths.js.dest).on("change", browserSync.reload);
  gulp.watch(paths.img.src, gulp.series(img));
  gulp.watch(paths.html.src).on("change", browserSync.reload);
}

// Export to public
exports.style = style;
exports.js = js;
exports.img = img;
exports.watch = watch;
