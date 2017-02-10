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
    }
};
