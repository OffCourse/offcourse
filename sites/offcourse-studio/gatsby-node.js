const fs = require('fs');

require('source-map-support').install();
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017',
    },
});

exports.onPreBootstrap = ({reporter}) => {
    const contentPath = 'data';
    if(!fs.existsSync(contentPath)){
        reporter.info(`creating the ${contentPath} directory`);
        fs.mkdirSync(contentPath);
    }
};

exports.createPages = async ({actions}) => {
    const basePath = "/";
    actions.createPage({
        path: basePath,
        component: require.resolve('./src/templates/HomePage')
    });
};
