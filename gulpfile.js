const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done();
}

function dev() {
    watch( 'src/scss/**/*.scss', css );
}

exports.dev = dev; // gulp dev
exports.css = css; // gulp css
