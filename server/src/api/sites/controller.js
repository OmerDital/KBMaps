import Site from './model';
import siteSchema from './schema';

export const getAll = (req, res, next) => {
  Site.find()
    .then(entities => {
      res.send(entities);
    })
    .catch(next);
};

export const insert = async (req, res, next) => {
  let newSite;

  try {
    newSite = await siteSchema.validate(req.body);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return new Site(newSite)
    .save()
    .then(createdTask => {
      res.status(201).send(createdTask);
    })
    .catch(next);
};

export const update = async ({ params: { id }, body }) => {
  const siteId = id;
  const newSite = await siteSchema.validate(body);
  const { name, adress, longitude, latitude, description, contactName, contactNumber } = newSite;

  const result = await Site.findByIdAndUpdate(siteId, {
    $set: { name, adress, longitude, latitude, description, contactName, contactNumber }
  });

  if (!result) {
    throw createError(404);
  }

  return result;
};
