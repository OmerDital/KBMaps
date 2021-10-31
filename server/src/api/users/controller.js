export const getAll = (req, res, next) => {
  const users = ['noga', 'ben', 'omer'];

  res.send(users);
};
