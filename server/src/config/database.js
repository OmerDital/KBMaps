import mongoose from 'mongoose';

export default () => {
  const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/kbmaps';

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, error => {
      if (error) {
        return reject(error);
      }

      return resolve();
    });
  });
};
