import Site from './model';
import siteSchema from './schema';

export const getAll = (req, res, next) => {
  Site.find()
    .then(entities => {
      res.send(entities);
    }).catch(next);
};

export const insert = async (req, res, next) => {
  let newSite;

  try {
    newSite = await siteSchema.validate(req.body);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return new Site(newSite).save()
    .then(createdTask => {
      res.status(201).send(createdTask);
    })
    .catch(next);
};
