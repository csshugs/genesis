module.exports = {
    imgDev: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dev.img %>/'
            }
        ]
    },
    imgBuild: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.build.img %>/'
            }
        ]
    },
    fontsDev: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dev.fonts %>/'
            }
        ]
    },
    fontsBuild: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.build.fonts %>/'
            }
        ]
    },
    fontsCms: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.cms.fonts %>/'
            }
        ]
    },
    jsDev: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dev.js %>/'
            }
        ]
    },
    jsBuild: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.build.js %>/'
            }
        ]
    },
    jsCms: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['*.js'],
                dest: '<%= globalConfig.cms.js %>/'
            }
        ]
    },
    cssCms: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.build.css %>/',
                src: ['*.css'],
                dest: '<%= globalConfig.cms.css %>/'
            }
        ]
    }
};
