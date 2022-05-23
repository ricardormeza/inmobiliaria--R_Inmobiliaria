const { src,dest, watch, parallel } = require('gulp'); // { } con llaves extraemos varisa funciones

// CSS 
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// IMAGENES
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// JAVASCRIPT
const terser = require('gulp-terser-js');

//FONT-AWESOME
// const fontawesome = require('font-awesome');

function css ( done ){
    src('src/scss/**/*.scss')// IDENTIFICAR ARCHIVO .SCSS a compilar
        .pipe(sourcemaps.init())
        .pipe( plumber())
        .pipe( sass() )// COMPILAR
        .pipe(postcss([ autoprefixer(), cssnano() ]) )
        .pipe(sourcemaps.write('.'))
        .pipe( dest('build/css') ) //ALMACENAR EN DISCO DURO
    done();
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin(opciones) ) )
        .pipe( dest('build/img') )
    done();
}

function versionWebp(done){
    
    const opciones = {
        quality: 50
    };

    // src('src/img/**/*.{png,jpg}')
    src('src/img/**/*')
    .pipe( webp(opciones) )
    .pipe( dest('build/img') )

    done();
}

function versionAvif(done){
    
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
    .pipe( avif(opciones) )
    .pipe( dest('build/img') )

    done();
}

function javascript( done ){
    src('src/js/**/*.js')
        .pipe( sourcemaps.init() )
        .pipe( terser() )
        .pipe( sourcemaps.write('.') )
        .pipe(dest('build/js'))

    done();
}


function dev ( done ){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)

    done();
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;

exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);