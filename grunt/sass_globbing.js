module.exports = {
    dev: {
        files: {
            '<%= globalConfig.source.css %>/_IMPORTS/_tools.imports.scss': '<%= globalConfig.source.css %>/tools/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_base.imports.scss': '<%= globalConfig.source.css %>/base/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_objects.imports.scss': '<%= globalConfig.source.css %>/objects/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_components.imports.scss': '<%= globalConfig.source.css %>/components/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_plugins.imports.scss': '<%= globalConfig.source.css %>/plugins/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_trumps.imports.scss': '<%= globalConfig.source.css %>/trumps/**/*.scss'
        }
    }
};
