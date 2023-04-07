'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
  });
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'hello world';
    },
  });
  await server
    .start()
    .then(() => {
      console.log('Server running on %s', server.info.uri);
    })
    .catch(e => console.log(e));
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
