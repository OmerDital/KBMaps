import { Router } from 'express';
import usersRouter from './users';
import sitesRouter from './sites';

const router = Router();

router.use('/users', usersRouter);
router.use('/sites', sitesRouter);

router.use((error, req, res, next) => {
  console.error(error);

  if (error.status) {
    res.send(error.status).send(error.message);
  } else {
    res.status(500).send('An error has occurred!');
  }
});

export default router;
