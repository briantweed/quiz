'use strict';

const fs = require('fs');
const favicon = require ('gulp-real-favicon');
const gulp = require('gulp');
const minimist = require('minimist');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');


const generate_favicon = (done) => {

    favicon.generateFavicon({
        masterPicture: './app/gulp/favicon.jpg',
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
        markupFile: './app/gulp/favicon-data.json'

    }, function() {
        gulp.src('./').pipe(notify({message: 'Favicon generated', onLast: true}));
        done();
    });

};


const create_component = () => {
    let options = minimist(process.argv.slice(3));
    if (options.name !== undefined && options.name !== true) {
        if (!fs.existsSync('./app/Components/' + options.name)) {
            return gulp.src('./app/gulp/component.template')
                .pipe(replace('{{ page_name }}', options.name))
                .pipe(rename('index.js'))
                .pipe(gulp.dest('./app/Components/' + options.name))
                .pipe(gulp.src('./app/gulp/styles.template'))
                .pipe(replace('{{ page_name }}', options.name))
                .pipe(rename(options.name + '.module.scss'))
                .pipe(gulp.dest('./app/Components/' + options.name))
                .pipe(notify({ message: options.name + ' created', onLast: true }))
        } else {
            return gulp.src('/')
                .pipe(notify({ message: 'Error: ' + options.name + ' already exists', emitError: true }));
        }
    } else {
        return gulp.src('/')
            .pipe(notify({ message: 'Error: filename required', emitError: true }));
    }
};


const help = (done) => {
    console.log("\n\nThis is a list of all available tasks: \n");
    console.log(" component -  gulp template --name Name");
    console.log(" favicon   -  generate favicon\n\n");
    done();
};



exports.default = help;
exports.help = help;
exports.component = create_component;
exports.favicon = generate_favicon;

