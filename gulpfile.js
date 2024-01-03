const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {
    src('src/scss/**/*.scss') // Indentificar el archivo de sass
        .pipe( sass() ) // Compilarlo
        .pipe( dest("build/css") ); // Almacenarlo

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;