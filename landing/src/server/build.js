const { resolve } = require('path');

const nextBuild = require('next/dist/server/build').default;

const logger = require('./logger');
const nextJsConfig = require('./config/next.config.js');

const nextDir = resolve(__dirname, './../client');

const main = async () => {
  logger.info('next build');
  await nextBuild(nextDir, nextJsConfig);
};

main();