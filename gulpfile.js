'use strict';

const fs = require('fs');
const favicon = require('gulp-real-favicon');
const gulp = require('gulp');
const glob = require('glob');
const minimist = require('minimist');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');


const generate_favicon = (done) => {

    favicon.generateFavicon({
        masterPicture: './gulp/favicon.jpg',
        dest: './public',
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'noChange',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                },
                appName: "Theme Test"
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#fff',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                },
                appName: "Theme Test"
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#fff',
                manifest: {
                    name: "IOA Claims Portal",
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 53.28125,
                themeColor: '#fff'
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: './gulp/favicon-data.json'

    }, function () {
        gulp.src('./').pipe(notify({message: 'Favicon generated', onLast: true}));
        done();
    });

};


const create_component = () => {
    let options = minimist(process.argv.slice(3));
    if (options.component !== undefined && options.component !== true) {
        const componentPath = options.component.replace(".", "/");
        const componentName = options.component.split(/[\/.]+/).pop();
        if (!fs.existsSync('./app/Components/' + componentPath)) {
            return gulp.src('./gulp/component.template')
                .pipe(replace('{{ page_name }}', componentName))
                .pipe(rename('index.js'))
                .pipe(gulp.dest('./app/Components/' + componentPath))
                .pipe(gulp.src('./gulp/styles.template'))
                .pipe(replace('{{ page_name }}', componentName))
                .pipe(rename(componentName + '.module.scss'))
                .pipe(gulp.dest('./app/Components/' + componentPath))
                .pipe(notify({message: componentName + ' created', onLast: true}))
        } else {
            return gulp.src('/')
                .pipe(notify({message: 'Error: ' + componentName + ' already exists', emitError: true}));
        }
    } else {
        return gulp.src('/')
            .pipe(notify({message: 'Error: filename required', emitError: true}));
    }
};

const add_theme = () => {
    const dir = './app/components/**/*.scss';

    return glob(dir, {}, function (er, files) {

        files.map(file => {

            return gulp.src(file)
                .pipe(replace('// ----------------------------------------*-',
                    `.test {

                    }

                    ----------------------------------------*-`
                ))
                .pipe(gulp.dest(file))
                .pipe(notify({message: 'theme added', onLast: true}));


        })

    })


};

const help = (done) => {
    console.log("\n\nThis is a list of all available tasks: \n");
    console.log(" make -  gulp make --component=Name");
    console.log(" favicon   -  generate favicon\n\n");
    done();
};


exports.default = help;
exports.help = help;
exports.make = create_component;
exports.favicon = generate_favicon;
exports.theme = add_theme;

