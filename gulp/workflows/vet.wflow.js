'use strict';

module.exports = function(gulp, args) {

    var help,
        dependencies = [
            'jshint'
        ];

    if (args.jshint) {
        dependencies = ['jshint'];
    }

    if (args.a || args.auto) {
        dependencies.push('watch:jshint');
    }

    help = 'vet the code for quality standards\n'
           + '- (-s / --src) vet only the src code\n'
           + '- (-d / --dist) vet only the dist code\n'
           + '- (a / auto) vet and add a watch on the src';

    gulp.task('vet', help, dependencies);
};
