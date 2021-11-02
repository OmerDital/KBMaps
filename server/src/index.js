import startServer from './config/express';
import connectDatabase from './config/database';

connectDatabase()
  .then(startServer)
  .then(port => {
    // eslint-disable-next-line no-console
    console.log(`server started on port ${port}!`);
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.error('An error occured while starting the website');
  });
